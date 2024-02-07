import { type MediaQueryFeatures, useMediaQuery } from "react-responsive";

const breakpoint = {
  xs: 375,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

type MaxModifier =
  | "max-xs"
  | "max-sm"
  | "max-md"
  | "max-lg"
  | "max-xl"
  | "max-2xl";
type Modifier = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export default function useTailwindMediaQuery(
  ...params: Array<Modifier | MaxModifier>
) {
  const media = useMediaQuery(
    (() => {
      const newParams = {} as MediaQueryFeatures;
      for (const iterator of params) {
        if (iterator.startsWith("max-")) {
          const value = breakpoint[iterator.replace("max-", "") as Modifier];
          if (value) {
            newParams.maxWidth = value;
          }
        } else {
          const value = breakpoint[iterator as Modifier];
          if (value) {
            newParams.minWidth = value;
          }
        }
      }
      return newParams;
    })()
  );
  return media;
}
