export default function ThirdPlantilla() {
  const pathData = "M45 5 Q30 10 35 20 Q38 30 25 32 Q30 38 38 40 Q33 35 27 36 Q23 34 29 44";

  const pathStyles = [
    { transform: "", strokeWidth: 1.2, dash: "3 2" },
    { transform: "translate(0.20, 0.20)", strokeWidth: 1.2, dash: "2 2" },
    { transform: "translate(-0.40, 10)", strokeWidth: 1, dash: "1 2" },
    { transform: "translate(14, -0.60)", strokeWidth: 1.4, dash: "2 3" },
    { transform: "translate(-12, -1)", strokeWidth: 1.1, dash: "1 1" },
    { transform: "translate(13, 1.5)", strokeWidth: 1.5, dash: "6 5" },
    {
      transform: "translate(-8, 0.5)",
      strokeWidth: 1.25,
      dash: "3 1",
      d: "M45 10 Q30 10 35 20 Q38 30 25 32 Q30 38 38 40 Q33 35 27 36 Q23 34 29 44",
    },
    { transform: "translate(7, 1.8)", strokeWidth: 1.15, dash: "2 4" },
    { transform: "translate(-0.10, -1.2)", strokeWidth: 1, dash: "3 3" },
    { transform: "translate(1, -0.9)", strokeWidth: 1.35, dash: "2 1" },
  ];

  const Rulo = ({ className }: { className: string }) => (
    <svg className={`rulo ${className}`} viewBox="0 0 50 50">
      {pathStyles.map((style, index) => (
        <path
          key={index}
          d={style.d || pathData}
          transform={style.transform}
          stroke="black"
          strokeWidth={style.strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={style.dash}
        />
      ))}
    </svg>
  );

  //bg-gradient-to-br from-[#d39537] via-[#dfbf8c] to-[#d8b98d] 
  return (
    <div
    style={{
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle, #fffbe9 0%, #e6ccb2 60%, #7f5539 100%)',
  }}
    
    >
      
      
      
      
      
      
      
      
      <div className="   flex flex-col lg:flex-row items-center justify-center gap-4  px-4 sm:px-10 md:px-20 lg:px-30 py-5">
        <div className="marco">
          <div className="h-full   m-2 border-4 border-black">
            <div className="contenido">
              <p>hola</p>
              <Rulo className="top-left -translate-y-2 -translate-x-6" />
              <Rulo className="top-right -translate-y-4 translate-x-3" />
              <Rulo className="bottom-left translate-y-4 -translate-x-3" />
              <Rulo className="bottom-right translate-y-2 translate-x-5" />
            </div>
          </div>
        </div>

        <div className="decorative-line flex flex-col gap-9 items-center ">
          <svg viewBox="0 0 400 40" className="line-svg" xmlns="http://www.w3.org/2000/svg">
            {/* Líneas superiores */}
            <line x1="0" y1="12" x2="150" y2="12" stroke="#000" strokeWidth="2" />
            <line x1="250" y1="12" x2="400" y2="12" stroke="#000" strokeWidth="2" />

            {/* Rayitas verticales (no tocan extremos) */}
            <line x1="50" y1="8" x2="50" y2="16" stroke="#000" strokeWidth="1" />
            <line x1="350" y1="8" x2="350" y2="16" stroke="#000" strokeWidth="1" />

            {/* Líneas inferiores */}
            <line x1="0" y1="28" x2="150" y2="28" stroke="#000" strokeWidth="2" />
            <line x1="250" y1="28" x2="400" y2="28" stroke="#000" strokeWidth="2" />

            {/* Rayitas verticales inferiores */}
            <line x1="50" y1="24" x2="50" y2="32" stroke="#000" strokeWidth="1" />
            <line x1="350" y1="24" x2="350" y2="32" stroke="#000" strokeWidth="1" />

            {/* Línea central atravesando el rombo grande */}
            <line x1="0" y1="20" x2="400" y2="20" stroke="#000" strokeWidth="1" />

            {/* Rombo grande formado por rombos pequeños */}
            {/* Pequeños rombos (4) */}
            <polygon points="190,20 195,15 200,20 195,25" fill="white" stroke="#000" strokeWidth="1" />
            <polygon points="200,20 205,15 210,20 205,25" fill="white" stroke="#000" strokeWidth="1" />
            <polygon points="195,15 200,10 205,15 200,20" fill="white" stroke="#000" strokeWidth="1" />
            <polygon points="195,25 200,30 205,25 200,20" fill="white" stroke="#000" strokeWidth="1" />

            {/* Rombo contenedor más grande (delimita) */}
            <polygon points="190,20 200,10 210,20 200,30" fill="none" stroke="#000" strokeWidth="2" />
          </svg>

          <h1 className="h1-gotico  text-6xl">Bolas de Algodon</h1>
        </div>

        <div className="marco">
          <div className="h-full   m-2 border-4 border-black">
            <div className="contenido">
              <p>hola</p>
              <Rulo className="top-left -translate-y-2 -translate-x-6" />
              <Rulo className="top-right -translate-y-4 translate-x-3" />
              <Rulo className="bottom-left translate-y-4 -translate-x-3" />
              <Rulo className="bottom-right translate-y-2 translate-x-5" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 ">
        <div>
          <div className="border-3 mx-32"></div>
          <div className="border-2 my-1 mx-32"></div>
        </div>
        <div className="mx-32  flex justify-between">
          <p>PRIMERO</p>
          <p>SEUNDO</p>
          <p>TERCERO</p>
        </div>
        <div>
          <div className="border-2 my-1 mx-32"></div>
          <div className="border-3 mx-32"></div>
        </div>
      </div>

      <div className="mx-32 flex gap-2">
        <div className="flex-[2]">
          <div className=" flex flex-col ">
            <h2 className="h1-funny text-8xl">PRIMERO</h2>
            <p className="text-white text-center bg-black p-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="">
            <div className="flex gap-5">
              <div className=" flex-1  mt-4">
                <div className="flex items-center mt-5 mx-3 gap-2">
                  <div className="bg-black px-3 h-20 flex items-center">
                    <h1 className="h1-gotico text-white text-6xl text-center">X</h1>
                  </div>
                  <div className="-mt-5">
                    <h2 style={{ fontFamily: "italic" }} className="">
                      Lorem ipsum dolor sitr cfdcderrered ddd
                    </h2>
                  </div>
                </div>

                <div className="mx-3 mt-2">
                  <p className="h1-funny">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dignissimos nam laborum ab qui, sapiente
                    similique minima officia ipsum atque. Assumenda voluptas blanditiis corrupti dolor impedit veniam soluta
                    laborum minima. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dignissimos nam laborum ab
                    qui, sapiente similique minima officia ipsum atque. Assumenda voluptas blanditiis
                  </p>

               <div className="border p-2 mt-4">
                   <p className="text-white text-center bg-black p-3">Lorem ipsum dolor</p>
                  <p className="h1-funny">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dignissimos nam laborum ab qui, sapiente 
                  </p>
               </div>
                </div>
              </div>
              <div className=" flex-[3] mt-4 mr-3 bg-900 flex flex-col w-full items-center ">
                <div className="0 w-full">
                  <div className="border-4 ">
                    <div className="h-full   m-2 border-4 border-black">
                      <div className="contenido ">
                        <p>BREAK NEWS</p>
                        <Rulo className="top-left -translate-y-2 -translate-x-6" />
                        <Rulo className="top-right -translate-y-4 translate-x-3" />
                        <Rulo className="bottom-left translate-y-4 -translate-x-3" />
                        <Rulo className="bottom-right translate-y-2 translate-x-5" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-800 flex justify-center">
                    <div className=" mt-3 w-96 h-96 ">
                      <img
                        className="w-full h-full object-cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOjljc8wDx6coPFQKBYRL5K7YcdSdTTln3mqK5eCtswoWlasl1VL0Kn8Ck1cPMLJVtxYQ&usqp=CAU"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-vet-800 w-full h-fit flex justify-center items-center mt-4">
                  <div className="decorative-line flex flex-col gap-9 items-center justify-center">
                    <svg viewBox="0 0 600 40" width="600" height="40" className="line-svg" xmlns="http://www.w3.org/2000/svg">
                      {/* Líneas superiores */}
                      <line x1="0" y1="12" x2="250" y2="12" stroke="#000" strokeWidth="2" />
                      <line x1="350" y1="12" x2="600" y2="12" stroke="#000" strokeWidth="2" />

                      {/* Rayitas verticales (no tocan extremos) */}
                      <line x1="100" y1="8" x2="100" y2="16" stroke="#000" strokeWidth="1" />
                      <line x1="500" y1="8" x2="500" y2="16" stroke="#000" strokeWidth="1" />

                      {/* Líneas inferiores */}
                      <line x1="0" y1="28" x2="250" y2="28" stroke="#000" strokeWidth="2" />
                      <line x1="350" y1="28" x2="600" y2="28" stroke="#000" strokeWidth="2" />

                      {/* Rayitas verticales inferiores */}
                      <line x1="100" y1="24" x2="100" y2="32" stroke="#000" strokeWidth="1" />
                      <line x1="500" y1="24" x2="500" y2="32" stroke="#000" strokeWidth="1" />

                      {/* Línea central atravesando el rombo grande */}
                      <line x1="0" y1="20" x2="600" y2="20" stroke="#000" strokeWidth="1" />

                      {/* Rombo grande formado por rombos pequeños */}
                      {/* Pequeños rombos (4) */}
                      <polygon points="290,20 295,15 300,20 295,25" fill="white" stroke="#000" strokeWidth="1" />
                      <polygon points="300,20 305,15 310,20 305,25" fill="white" stroke="#000" strokeWidth="1" />
                      <polygon points="295,15 300,10 305,15 300,20" fill="white" stroke="#000" strokeWidth="1" />
                      <polygon points="295,25 300,30 305,25 300,20" fill="white" stroke="#000" strokeWidth="1" />

                      {/* Rombo contenedor más grande (delimita) */}
                      <polygon points="290,20 300,10 310,20 300,30" fill="none" stroke="#000" strokeWidth="2" />
                    </svg>

                    <h1 className="text-5xl -mt-9 ">   Never Let Me Donw</h1>
                  </div>

                 
                </div>
                {/**DEBAJO  */}
               
                <div className="border-4 w-full mt-1"></div>
                 <div className="border-2 w-full mt-2"></div>
             


                <div className="flex m-5 gap-7">
                  <div><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, animi. Amet hic doloremque nobis pariatur. Officia, dignissimos dolores repellat tempore dolorum perferendis quod accusantium, quae fugiat, debitis excepturi iusto quibusdam.</p></div>
                  <div> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut dolore consequatur earum maiores consectetur minus amet odio rerum eveniet, sit dolores architecto quis obcaecati quae eos. Ipsum non nulla eveniet.</p></div>
                  </div>           
              </div>
            </div>
          </div>
        </div>

        <div className=" flex-1">

            <div className="border p-2 mt-4">
                   <p className="text-white text-center bg-black p-3">Lorem ipsum dolor</p>
                  <p className="h1-funny">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dignissimos nam laborum ab qui, sapiente .
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dignissimos nam laborum ab qui, sapiente .
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dignissimos nam laborum ab qui, sapiente .
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dignissimos nam laborum ab qui, sapiente .
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dignissimos nam laborum ab qui, sapiente .
                  </p>

 <div className="bg-viet-800 w-full h-9 flex justify-center items-center mt-4">
                  <div className="decorative-line flex flex-col gap-9 items-center justify-center">
                    <svg viewBox="0 0 600 40" width="600" height="40" className="line-svg" xmlns="http://www.w3.org/2000/svg">
                      {/* Líneas superiores */}
                      <line x1="0" y1="12" x2="250" y2="12" stroke="#000" strokeWidth="2" />
                      <line x1="350" y1="12" x2="600" y2="12" stroke="#000" strokeWidth="2" />

                      {/* Rayitas verticales (no tocan extremos) */}
                      <line x1="100" y1="8" x2="100" y2="16" stroke="#000" strokeWidth="1" />
                      <line x1="500" y1="8" x2="500" y2="16" stroke="#000" strokeWidth="1" />

                      {/* Líneas inferiores */}
                      <line x1="0" y1="28" x2="250" y2="28" stroke="#000" strokeWidth="2" />
                      <line x1="350" y1="28" x2="600" y2="28" stroke="#000" strokeWidth="2" />

                      {/* Rayitas verticales inferiores */}
                      <line x1="100" y1="24" x2="100" y2="32" stroke="#000" strokeWidth="1" />
                      <line x1="500" y1="24" x2="500" y2="32" stroke="#000" strokeWidth="1" />

                      {/* Línea central atravesando el rombo grande */}
                      <line x1="0" y1="20" x2="600" y2="20" stroke="#000" strokeWidth="1" />

                      {/* Rombo grande formado por rombos pequeños */}
                      {/* Pequeños rombos (4) */}
                      <polygon points="290,20 295,15 300,20 295,25" fill="white" stroke="#000" strokeWidth="1" />
                      <polygon points="300,20 305,15 310,20 305,25" fill="white" stroke="#000" strokeWidth="1" />
                      <polygon points="295,15 300,10 305,15 300,20" fill="white" stroke="#000" strokeWidth="1" />
                      <polygon points="295,25 300,30 305,25 300,20" fill="white" stroke="#000" strokeWidth="1" />

                      {/* Rombo contenedor más grande (delimita) */}
                      <polygon points="290,20 300,10 310,20 300,30" fill="none" stroke="#000" strokeWidth="2" />
                    </svg>

                   
                  </div>

                 
                </div>
                   <p className="h1-funny">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dignissimos nam laborum ab qui, sapiente .
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dignissimos nam laborum ab qui, sapiente .
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dignissimos nam laborum ab qui, sapiente .
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dignissimos nam laborum ab qui, sapiente .
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dignissimos nam laborum ab qui, sapiente .
                  </p>
               </div>

                 <div className="border p-2 mt-4">
                   <p className="text-white text-center bg-black p-3">Lorem ipsum dolor</p>
                  <p className="h1-funny">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dignissimos nam laborum ab qui, sapiente  fdv vfd fvfv fvfdv fdfdv fdfvfd fdvf.
                    
                    
                  </p>

 <div className="bet-800 w-full h-9 flex justify-center items-center mt-4">
                  <div className="decorative-line flex flex-col gap-9 items-center justify-center">
                    <svg viewBox="0 0 600 40" width="600" height="40" className="line-svg" xmlns="http://www.w3.org/2000/svg">
                      {/* Líneas superiores */}
                      <line x1="0" y1="12" x2="250" y2="12" stroke="#000" strokeWidth="2" />
                      <line x1="350" y1="12" x2="600" y2="12" stroke="#000" strokeWidth="2" />

                      {/* Rayitas verticales (no tocan extremos) */}
                      <line x1="100" y1="8" x2="100" y2="16" stroke="#000" strokeWidth="1" />
                      <line x1="500" y1="8" x2="500" y2="16" stroke="#000" strokeWidth="1" />

                      {/* Líneas inferiores */}
                      <line x1="0" y1="28" x2="250" y2="28" stroke="#000" strokeWidth="2" />
                      <line x1="350" y1="28" x2="600" y2="28" stroke="#000" strokeWidth="2" />

                      {/* Rayitas verticales inferiores */}
                      <line x1="100" y1="24" x2="100" y2="32" stroke="#000" strokeWidth="1" />
                      <line x1="500" y1="24" x2="500" y2="32" stroke="#000" strokeWidth="1" />

                      {/* Línea central atravesando el rombo grande */}
                      <line x1="0" y1="20" x2="600" y2="20" stroke="#000" strokeWidth="1" />

                      {/* Rombo grande formado por rombos pequeños */}
                      {/* Pequeños rombos (4) */}
                      <polygon points="290,20 295,15 300,20 295,25" fill="white" stroke="#000" strokeWidth="1" />
                      <polygon points="300,20 305,15 310,20 305,25" fill="white" stroke="#000" strokeWidth="1" />
                      <polygon points="295,15 300,10 305,15 300,20" fill="white" stroke="#000" strokeWidth="1" />
                      <polygon points="295,25 300,30 305,25 300,20" fill="white" stroke="#000" strokeWidth="1" />

                      {/* Rombo contenedor más grande (delimita) */}
                      <polygon points="290,20 300,10 310,20 300,30" fill="none" stroke="#000" strokeWidth="2" />
                    </svg>

                   
                  </div>

                 
                </div>
                   <p className="h1-funny">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dignissimos nam laborum ab qui, sapiente .
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dignissimos nam  bf klndfkvnf kmndvoifv kdnvoif dekvneoonv knerk 
                  </p>
               </div>
        </div>
      </div>
      <div className="border-4  mx-32 mt-3">

      </div>
       <div className="border-t-2 mx-32 mt-2 pb-5">

      </div>
    </div>
  );
}
