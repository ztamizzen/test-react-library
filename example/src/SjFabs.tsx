import React, { useRef, useEffect } from "react";
import { HelpOutline, NavigateNext, QuestionAnswer } from "@material-ui/icons";
import { useState } from "react";
import { SjFab } from "sj-component-library";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

export default function SjFabs() {
  const ref = useRef<HTMLDivElement>(null);
  const [helpFabPlacement, setHelpFabPlacement] = useState<
    CSSProperties | undefined
  >({});
  const [navigateFabPlacement, setNavigateFabPlacement] = useState<
    CSSProperties | undefined
  >({});
  const [qnaFabPlacement, setQnaFabPlacement] = useState<
    CSSProperties | undefined
  >({});

  useEffect(() => {
    const baseStyle: CSSProperties = { right: 20, position: "fixed" };
    const spacing = 50;

    let height = 0;
    if (ref.current) {
      for (let i = 0, len = ref.current.children.length; i < len; i++) {
        const item = ref.current.children.item(i);
        const rect = item?.getBoundingClientRect();
        height = Math.max(height, rect?.height as number);
      }
    }
    const bottomMultiplier = spacing + height;
    setHelpFabPlacement({ ...baseStyle, bottom: bottomMultiplier + 94 });
    setQnaFabPlacement({
      ...baseStyle,
      bottom: bottomMultiplier + 30,
    });
    setNavigateFabPlacement({ ...baseStyle, bottom: spacing + 20 });
  }, []);

  return (
    <div className="sj-fabs" ref={ref}>
      <SjFab aria-label="Next step" color="secondary" style={helpFabPlacement}>
        <HelpOutline />
      </SjFab>
      <SjFab aria-label="Help" style={qnaFabPlacement}>
        <QuestionAnswer />
      </SjFab>
      <SjFab aria-label="Next" color="primary" style={navigateFabPlacement}>
        <NavigateNext />
      </SjFab>
    </div>
  );
}
