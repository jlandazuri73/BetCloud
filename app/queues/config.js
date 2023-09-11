const { proccessQueueEMAIL } = require("./email");
const amqp = require("amqplib");

// Configuraciones
const connectionOptions = {
  protocol: "amqp",
  hostname: "localhost",
  port: 5672,
  username: "guest",
  password: "guest",
  vhost: "/",
};

// Colas
const queues = ["EMAIL"];

// Añadir elementos a la cola
export async function addToQueue(queueName, data) {
  try {
    // Verificar si la cola a la que se intenta agregar existe
    if (!queues.includes(queueName)) {
      console.log(
        "La cola especificada en addToQueue no existe o no esta configurada para recibir mensajes"
      );
      return null;
    }
    // Creando conexion
    const connection = await amqp.connect(connectionOptions);
    const channel = await connection.createChannel();
    const queueOptions = { durable: true };
    await channel.assertQueue(queueName, queueOptions);
    // Convirtiendo el mensaje a string y añadiendolo a la cola
    const message = JSON.stringify(data);
    await channel.sendToQueue(queueName, Buffer.from(message));
    console.log(`Nuevo elemento a la cola |${queueName}|`);
    // Cerrando conexion
    await channel.close();
    await connection.close();
  } catch (error) {
    console.error("Error al agregar elemento a la cola:", error);
  }
}

// Procesar elementos de la cola
export async function consumeFromQueue(queueName) {
  try {
    // Verificar si la cola a la que se intenta agregar existe
    if (!queues.includes(queueName)) {
      console.log(
        "La cola especificada en consumeFromQueue no existe o no esta configurada para recibir mensajes"
      );
      return null;
    }
    // Conexion
    const connection = await amqp.connect(connectionOptions);
    const channel = await connection.createChannel();
    const queueOptions = { durable: true };
    await channel.assertQueue(queueName, queueOptions);
    await channel.prefetch(1); // Procesa un elemento a la vez
    console.log("Esperando elementos en la cola...");

    channel.consume(queueName, async (message) => {
      if (message !== null) {
        const content = message.content.toString();
        const data = JSON.parse(content);
        console.log(`Elemento recibido de la cola |${queueName}|`);

        // Procesar cola EMAIL
        if (queueName === "EMAIL") {
          const response = await proccessQueueEMAIL(data);
          // Si hay un error rechazamos el mensaje para que sea encolado nuevamente
          if (!response) {
            channel.nack(message);
          } else {
            // Confirma el procesamiento exitoso del elemento
            channel.ack(message);
          }
        }
      }
    });
  } catch (error) {
    console.error("Error al consumir elementos de la cola:", error);
  }
}
