/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

// Custom Hook
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    //Refatorando o POST
    const [config, setConfig] = useState(null); // Representa as configurações do request
    const [method, setMethod] = useState(null); // Representa o request que será feito
    const [callFetch, setCallFeth] = useState(null); // Ativa a requist

    // Loading
    const [loading, setLoading] = useState(false);

    // Erros
    const [error, setError] = useState(null);

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            setMethod(method);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            // Tratando erros
            try {
                // Loading
                setLoading(true);

                const response = await fetch(url);
                const json = await response.json();

                setData(json);
            } catch (error) {
                console.log(error.message);

                setError("Houve algum erro ao carregar os dados!");
            }

            setLoading(false);
        };

        fetchData();
    }, [url, callFetch]);

    //Refatorando o POST
    useEffect(() => {
        const httpRequest = async () => {
            let json;

            if (method === "POST") {
                // Loading
                setLoading(true);

                let fetchOptions = [url, config];

                const response = await fetch(...fetchOptions);

                json = await response.json();

                setLoading(false);
            }

            setCallFeth(json);
        };

        httpRequest();
    }, [config, method, url]);

    return { data, httpConfig, loading, error };
};