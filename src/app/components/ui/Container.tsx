import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ContainerPadding =
  | "default"
  | "compact"
  | "10px"
  | "20px"
  | "none";

export interface NMContainerProps {
  children: ReactNode;
  className?: string;
  padding?: ContainerPadding;
}

const paddingMap: Record<ContainerPadding, string> = {
  default: "px-4 lg:px-20", 
  compact: "px-2.5 lg:px-5",
  "10px": "px-2.5", 
  "20px": "px-5", 
  none: "px-0",
};

const NMContainer = ({
  children,
  className,
  padding = "default",
}: NMContainerProps) => {
  return (
    <div
      className={cn(
        "w-full container mx-auto",
        paddingMap[padding],
        className
      )}
    >
      {children}
    </div>
  );
};

export default NMContainer;