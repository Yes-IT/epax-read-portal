import React from "react";
import CardElements from "../components/CardElements";
import Header from "../components/Header";

export default function Gallery() {
  return (
    <>
      <div>
        <div className="text-center">
          <Header />
        </div>
      </div>
      <section className="flex justify-center">

      </section>
      <section className="flex justify-center">
        <div className="w-10/12">
          <div className="text-center">
            <CardElements />
          </div>
        </div>
      </section>
    </>
  );
}
