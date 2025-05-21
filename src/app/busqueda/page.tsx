"use client";
import ResultBusqueda from "./resultsBusqueda";

export default function ComponentesPage( searchParams: { producto: string }) {


    return(
        ResultBusqueda({ params: { producto: "cpus" } })
    )
}
