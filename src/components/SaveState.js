import lz from "lzutf8";
import { usePreviousValue } from "beautiful-react-hooks";
import { useEditor } from "@craftjs/core";

export const SaveState = () => {
  const { query, draggedNodeId } = useEditor((state) => ({
    draggedNodeId: state.events.dragged,
  }));

  const previousNodeId = usePreviousValue(draggedNodeId);

  const saveEditor = () => {
    const json = query.serialize();
    const state = lz.encodeBase64(lz.compress(json));
    // eslint-disable-next-line no-undef
    localStorage.setItem("three-cols-editor", state);
  };

  if (previousNodeId != null && draggedNodeId == null) {
    saveEditor();
  }

  return null;
};
