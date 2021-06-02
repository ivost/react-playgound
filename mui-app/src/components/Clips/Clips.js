import React, {useEffect, useState} from 'react';

const Clips = ({setSelectedClip}) => {
    const [clips, setClips] = useState([]);
    //const [selectedClip, setSelectedClip] = useState(null);
    //const [clips, setClips, selectedClip, setSelectedClip] = props
    //const [selectedClip, setSelectedClip] = props
    // // eslint-disable-next-line no-unused-vars


    useEffect(() => {
        (async () => {
            const resp = await fetch('http://localhost:8080/clips');
            const json = await resp.json();
            //console.log(json);
            setClips(json);
        })();
    }, [setClips]);

    return (
        <>
            <div>
                <h2>Videos</h2>
                <ul>
                    {clips.map(v => (
                        <li key={v.id} onClick={() => setSelectedClip(v)}>{v.path}</li>
                    ))}
                </ul>
            </div>
            {/*<div>*/}
            {/*    {selectedClip && selectedClip.path}*/}
            {/*</div>*/}
        </>
    )
}

export default Clips