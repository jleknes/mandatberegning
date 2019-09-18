import React, { useState, useEffect } from 'react';

const apiUrl = "https://cors-anywhere.herokuapp.com/https://valgresultat.no/api";

const ValgVelger = ()  => {

    //const [område, årstall] = useState(0);

    const [links, setLinks] = useState([]);

    async function fetchData() {
        const res = await fetch(apiUrl);
        res
            .json()
            .then(setLinks(["/2009/st", "/2011/fy", "/2011/ko", "/2013/sa", "/2013/st"]));/*res => setLinks(res));*/
    }

    useEffect(() => {
        fetchData();
    }, []);

    function hrefTilLesbar(href) {
        const oversetting = {
            ['st']:"stortingsvalg",
            ['ko']:"kommunevalg",
            ['fy']:"fylkestingsvalg"};
        const år = href.substr(1,4);
        const valg = oversetting[href.substr(5,2)];
        return år+":"+valg;
    }

    return (
        <select>
            {links.map(link => (
                <option key={link} value={link}>
                    hrefTilLesbar({link})
                </option>
            ))}
        </select>
    );
}

export default ValgVelger;