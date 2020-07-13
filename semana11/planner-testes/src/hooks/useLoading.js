import React, { useState } from 'react';

function useLoading() {
    const [loading, setLoading] = useState(false)

    const LoadingGif = (<div>carregando...</div>)
    
    const ToggleLoading = () => {
        setLoading(!loading);
    };
    return [loading, ToggleLoading, LoadingGif];
}

export default useLoading
