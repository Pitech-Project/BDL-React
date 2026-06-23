"use client";

import StarterKit from "@tiptap/starter-kit";
import {
  RichTextEditor,
  MenuControlsContainer,
  MenuSelectHeading,
  MenuDivider,
  MenuButtonBold,
  MenuButtonItalic,
  MenuButtonOrderedList,
  MenuButtonBulletedList,
  RichTextEditorRef,
} from "mui-tiptap";
import { memo, useMemo } from "react";

type Props = {
  content: string;
  ref?: React.Ref<RichTextEditorRef>;
};

const renderControls = () => (
  <MenuControlsContainer>
    <MenuSelectHeading />
    <MenuDivider />
    <MenuButtonBold />
    <MenuButtonItalic />
    <MenuButtonOrderedList />
    <MenuButtonBulletedList />
  </MenuControlsContainer>
);

function TiptapEditor({ content, ref }: Props) {
    const extensions = useMemo(
        () => [
        StarterKit.configure({
            orderedList: {
            keepMarks: true,
            keepAttributes: false,
            },
            bulletList: {
            keepMarks: true,
            keepAttributes: false,
            },
        }),
        ],
        []
    );
  return (
    <RichTextEditor
      ref={ref}
      extensions={extensions}
      renderControls={renderControls}
      immediatelyRender={false}
      content={content}
    />
  );
}

export default memo(TiptapEditor)