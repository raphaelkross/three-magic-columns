import React from "react";
import { usePreviousValue } from 'beautiful-react-hooks'; 
import { useEditor } from "@craftjs/core";
import lz from "lzutf8";

export const SaveState = () => {
    const { actions, query, draggedNodeId } = useEditor((state) => ({
        draggedNodeId: state.events.dragged,
    }));

    const previousNodeId = usePreviousValue(draggedNodeId);

    const saveEditor = () => {
        const json = query.serialize();
        console.log('Saved', json);
        const state = lz.encodeBase64(lz.compress(json));
        localStorage.setItem('three-cols-editor', state);
    }

    if ( previousNodeId != null && draggedNodeId == null ) {
        saveEditor();
    }
    
    return null;
};
