export default function Section2() {
  return (
    <>
      <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
          <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img
              src="https://img.freepik.com/vector-premium/nina-tocando-piano-notas_567314-20.jpg?w=2000"
              className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "
              alt="Niña tocando piano animado"
            />
          </div>

          <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Aumenta la productividad musical al máximo
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
              En nuestra plataforma, creamos una atmósfera que fomenta la
              productividad en tu viaje musica
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Maximizamos tu habilidad y crecimiento musical.
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Acelera tu destreza en el piano.
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Aprende las mejores técnicas para tocar.
              </li>
            </ul>
          </div>
        </div> <br /> <br />
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
          <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Cumple tus metas y objetivos
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
              Con nuestros piano interactivo ahorra tiempo y para alcanzar tus
              sueños.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Ejercicios para poner en practica lo aprendido
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Tareas y preguntas para mejorar tus conocimientos
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Recomendaciones para mejorar aún mas
              </li>
            </ul>
          </div>
          <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
            <img
              src="https://i2.wp.com/www.javicolomer.com/wp-content/uploads/sinmasymas-musica-libros-575x323.jpg?fit=575%2C323"
              className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"
            />
          </div>
        </div>
      </section>
    </>
  );
}
