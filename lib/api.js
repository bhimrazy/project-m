import fs from "fs";
import { join } from "path";

const coursesDirectory = join(process.cwd(), "lib/data.json");

export function getCourseSlugs() {
  return fs.readdirSync(coursesDirectory);
}