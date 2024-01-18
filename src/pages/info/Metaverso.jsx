import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Iframe from "react-iframe";
import manual from "../../assets/proposals/manual.jpeg";
export const Metaverso = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto p-4 sm:p-10 mt-8">
        <h1 className="text-4xl font-semibold mb-6">
          Metaverso de la Gastronomía Boliviana
        </h1>
        <p>
          Objetivo: Aplicar la tendencia digital y virtual en la organización de
          eventos (aplicación principal post pandemia del COVID 19 y
          actualidad). Centro de convenciones Plataforma metaverso: Spatial.io
          Docente: Reyna Patricia Guerra Camacho Estudiantes: Meliza Rocio Achu
          Flores Leznny Nashira Alarcón Guzmán Marcos Quispe Chauca Luis Adolfo
          Marín Castro Alexandra Quea Patzy Universidad Privada Franz Tamayo /
          Proyecto de asignatura - 2do. semestre 2023
        </p>

        <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-xl aspect-w-16 aspect-h-9">
          <Iframe
            src="https://www.spatial.io/s/Eventos2023s-unifranz-65525cbd2fbd271099c2014a?share=8597670512053008360"
            width="100%"
            height="800px"
            className="rounded-t-xl"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};
