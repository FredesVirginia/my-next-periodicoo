
import Snowfall from 'react-snowfall';
export interface IPropsFirstPlantilla {
  primerTitulo: string;
  imagen1: string;
  segundoSubtitulo1: string;
  texto1: string;

  segundoSubtitulo2: string;
  texto2: string;
  imagen2: string;

  segundoSubtitulo3: string;
  texto3: string;

  segundoSubtitulo4: string;
  texto4: string;
}
export default function FirstPlantilla(props: IPropsFirstPlantilla) {
  return (
    <div className="relative py-20">
      <Snowfall
        color="#7a997f"
        snowflakeCount={10}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: -1,
        }}
      />
     <div className="relative z-10">
       <div className=" flex justify-between mx-30 py-5 translate-y-3">
        <div>Bolas de Algodon</div>
        <div>30 de Noviembre</div>
      </div>
      <div className="border mx-30"></div>
      <div className="flex justify-center my-5">
        <h1 className="h1-gotico  text-9xl">Bolas de Algodon</h1>
      </div>
      <div className="flex justify-center my-5 border-y-2 mx-30">
        <h1 className="h1-gotico  text-6xl">{props.primerTitulo}</h1>
      </div>

      <div className="mx-40 flex my-10 gap-10  h-96 ">
        <div className="w-[350px] flex-1 aspect-[1/1] rounded-2xl shadow-2xl">
          <img className="w-full rounded-2xl h-full object-cover" src={props.imagen2} alt="" />
        </div>

        <div className="flex-[2]   overflow-y-auto">
          <h2 className=" text-3xl">{props.segundoSubtitulo1}</h2>
          <p>{props.texto1}</p>
        </div>
      </div>

      <div className="mx-40 flex  my-10 gap-10  h-96 ">
        <div className="flex-[2] overflow-y-auto">
          <h2 className=" text-3xl">{props.segundoSubtitulo2}</h2>
          <p>{props.texto2}</p>
        </div>

        <div className="w-[350px] flex-1 rounded-2xl  shadow-2xl aspect-[1/1] ">
          <img className="w-full h-full rounded-2xl object-cover" src={props.imagen2} alt="" />
        </div>
      </div>

      <div className="mx-40 flex my-10 mt-5 translate-y-10 gap-5   justify-between">
        <div className=" flex-1 h-56  overflow-y-auto">
          <h2 className=" text-3xl">{props.segundoSubtitulo3}</h2>
          <p>{props.texto3}</p>
        </div>

        <div className=" flex-1 h-56 overflow-y-auto">
          <h2 className=" text-3xl">{props.segundoSubtitulo4}</h2>
          <p>{props.texto4}</p>
        </div>
      </div>

      <div className="mx-40 pt-5">
        <div className="border  mt-10 "></div>
        <div className=" flex justify-between mb-30  my-5 translate-y-3">
          <div>Bolas de Algodon</div>
          <div>30 de Noviembre</div>
        </div>
      </div>
     </div>
    </div>
  );
}
