import { useInputNodeStore } from "@/store/nodes-store";
import { ChangeEvent, useCallback } from "react";
import { Handle, Position } from "reactflow";

export function TextUpdaterNode() {
  const { text, updateText } = useInputNodeStore();

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    updateText(e.target.value);
  }, [updateText]);

  return (
    <>
      <div>
        <input
          id="text"
          name="text"
          placeholder="Text..."
          value={text}
          onChange={(e) => onChange(e)}
          className=" px-4 py-2 rounded-lg outline-none"
        />
        <Handle type="target" position={Position.Bottom} id="input_target" />
        <Handle type="source" position={Position.Top} id="input_source" />
      </div>
    </>
  );
}
