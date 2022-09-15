import { toast } from "./Toast";

export const ErrorHandler = (data) => {
  // console.log("🚀 ~ file: ErrorHandler.js ~ line 23 ~ ErrorHandler ~ data", data)

  if (typeof data === "string") {
    toast(data, "error");
    return;
  }
  if (typeof data !== "object" || !data) return;
  for (const key in data) {
    const child = data[key];
    console.log(child);
    if (typeof child === Array && child.length > 1) {
      child.map((c) => {
        toast(c, "error");
      });
    } else {
      const valueAs = typeof child !== "string" ? child[0] : child;
      // console.log("🚀 ~ file: ErrorHandler.js ~ line 20 ~ ErrorHandler ~ valueAs",typeof valueAs)
      // console.log("🚀 ~ file: ErrorHandler.js ~ line 20 ~ ErrorHandler ~ valueAs", valueAs)

      toast(valueAs, "error");
    }
  }
};
