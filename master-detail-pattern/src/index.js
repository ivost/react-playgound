import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

const ImgRoot = "https://edgestorage01.blob.core.windows.net/images/"

const ClipEvents = ({ clip }) => {
    const [clipEvents, setClipEvents] = useState(null);

    useEffect(() => {
        (async () => {
            const resp = await fetch(
                // eslint-disable-next-line react/prop-types
                `http://localhost:8080/clipevents?id=${clip.id}`
            );
            const json = await resp.json();
            //console.log(json);
            setClipEvents(json);
        })();
    }, [clip]);

    if (!clipEvents) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {clipEvents.map(v => (
                <div key={v.id}>
                  <img src={ImgRoot + v.image} alt=''/>
                </div>
            ))}
        </div>
    );
};

const Clips = () => {
    const [clips, setClips] = useState([]);
    const [selectedClip, setSelectedClip] = useState(null);

    useEffect(() => {
        (async () => {
            const resp = await fetch('http://localhost:8080/clips');
            const json = await resp.json();
            //console.log(json);
            setClips(json);
        })();
    }, []);

    return (
        <div>
            <div>
                <h2>Videos</h2>
                <ul>
                    {clips.map(v => (
                        <li key={v.id} onClick={() => setSelectedClip(v)}>{v.path}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Video Events</h2>
                { selectedClip ? <ClipEvents key={selectedClip.id} clip={selectedClip}/> : ""}
            </div>
        </div>
    )
};



const App = () => {
    return (
        <div>
            <h1>Video Events v.1.6.1.2</h1>
            <Clips/>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));

