async function test() {
  const username = "oneilh";
  const repo = "event_planner";
  let res = await fetch(`https://raw.githubusercontent.com/${username}/${repo}/master/project-meta.ts`);
  const text = await res.text();
  const match = text.match(/export\s+const\s+\w+\s*=\s*(\{[\s\S]*?\});?\s*$/);
  const objStr = match[1];
  try {
    const obj = new Function(`return ${objStr}`)();
    console.log("SUCCESS:", obj.name);
  } catch(e) {
    console.log("ERROR:", e);
  }
}
test();
