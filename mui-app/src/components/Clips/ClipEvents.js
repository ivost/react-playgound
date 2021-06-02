import React, {useEffect, useState} from 'react';

const ImgRoot = "https://edgestorage01.blob.core.windows.net/images/"

const ClipEvents = ({selectedClip}) => {
    const [clipEvents, setClipEvents] = useState(null);

    useEffect(() => {
        (async () => {
            console.log(selectedClip)
            if (selectedClip) {
                const resp = await fetch(
                    // eslint-disable-next-line react/prop-types
                    `http://localhost:8080/clipevents?id=${selectedClip.id}`
                );
                const json = await resp.json();
                //console.log(json);
                setClipEvents(json);
            }
        })();
    }, [selectedClip]);

    if (!clipEvents) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div>
                {clipEvents.map(v => (
                    <div key={v.id}>
                        <img src={ImgRoot + v.image} alt=''/>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ClipEvents