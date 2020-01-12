import React from "react";
import { useEditor } from "@craftjs/core";
import lz from "lzutf8";

export const SaveState = () => {
    const { actions, query, draggedNodeId } = useEditor((state) => ({
        draggedNodeId: state.events.dragged,
    }));

    const saveEditor = () => {
        const json = query.serialize();
        console.log('Saved', json);
        const state = lz.encodeBase64(lz.compress(json));
        localStorage.setItem('three-cols-editor', state);
    }
    
    if ( draggedNodeId != null ) {
        window.editorPreviousNodeId = draggedNodeId;
    }

    if ( window.editorPreviousNodeId != null && draggedNodeId == null ) {
        saveEditor();
    }
    
    return null;
};
