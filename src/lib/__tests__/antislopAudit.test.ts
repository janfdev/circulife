import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

function getAllSourceFiles(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (!fullPath.includes("node_modules") && !fullPath.includes(".next")) {
        getAllSourceFiles(fullPath, fileList);
      }
    } else if (
      (file.endsWith(".tsx") || file.endsWith(".ts")) &&
      !file.includes(".test.")
    ) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

describe("Anti-Slop R-02 Compliance Audit", () => {
  it("should ensure no source file contains em-dash (—) characters", () => {
    const srcDir = path.resolve(__dirname, "../../");
    const sourceFiles = getAllSourceFiles(srcDir);

    expect(sourceFiles.length).toBeGreaterThanOrEqual(10);

    const violations: { file: string; line: number; text: string }[] = [];

    for (const filePath of sourceFiles) {
      const content = fs.readFileSync(filePath, "utf-8");
      const lines = content.split("\n");
      lines.forEach((lineText, idx) => {
        if (lineText.includes("\u2014")) {
          violations.push({
            file: path.relative(srcDir, filePath),
            line: idx + 1,
            text: lineText.trim(),
          });
        }
      });
    }

    expect(violations).toEqual([]);
  });
});
