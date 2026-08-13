const state = {
  display: "flex",
  "flex-direction": "row",
  "flex-wrap": "nowrap",
  "justify-content": "flex-start",
  "align-items": "stretch",
  "align-content": "stretch",
  gap: 10,
  count: 5,
};

const container = document.getElementById("container");
const codeOutput = document.getElementById("codeOutput");
const gapSlider = document.getElementById("gapSlider");
const gapValue = document.getElementById("gapValue");
const countSlider = document.getElementById("countSlider");
const countValue = document.getElementById("countValue");

const flexOnlyGroupIds = ["group-direction", "group-wrap", "group-justify", "group-align", "group-aligncontent", "group-gap"];

function buildChildren() {
  container.innerHTML = "";
  for (let i = 0; i < state.count; i++) {
    const el = document.createElement("div");
    el.className = "child";
    el.textContent = i + 1;
    // vary size a little so stretch/align differences are visible
    const w = 55 + (i % 3) * 15;
    const h = 55 + ((i * 2) % 3) * 20;
    el.style.width = w + "px";
    el.style.height = h + "px";
    container.appendChild(el);
  }
}

function applyStyles() {
  container.style.display = state.display;

  if (state.display === "flex") {
    container.style.flexDirection = state["flex-direction"];
    container.style.flexWrap = state["flex-wrap"];
    container.style.justifyContent = state["justify-content"];
    container.style.alignItems = state["align-items"];
    container.style.alignContent = state["align-content"];
    container.style.gap = state.gap + "px";
  } else {
    // block/normal flow: clear flex-only props, children stack naturally
    container.style.flexDirection = "";
    container.style.flexWrap = "";
    container.style.justifyContent = "";
    container.style.alignItems = "";
    container.style.alignContent = "";
    container.style.gap = state.gap + "px"; // gap still works in block layout in modern browsers
  }

  // enable/disable flex-only controls
  flexOnlyGroupIds.forEach((id) => {
    const g = document.getElementById(id);
    const isFlex = state.display === "flex";
    g.classList.toggle("disabled", !isFlex);
    g.querySelectorAll("button").forEach((b) => (b.disabled = !isFlex));
  });
}

function renderCode() {
  let lines = [];
  lines.push(`<span class="sel">.container</span> <span class="punc">{</span>`);
  lines.push(`  <span class="prop">display</span><span class="punc">:</span> <span class="val">${state.display}</span><span class="punc">;</span>`);
  if (state.display === "flex") {
    lines.push(`  <span class="prop">flex-direction</span><span class="punc">:</span> <span class="val">${state["flex-direction"]}</span><span class="punc">;</span>`);
    lines.push(`  <span class="prop">flex-wrap</span><span class="punc">:</span> <span class="val">${state["flex-wrap"]}</span><span class="punc">;</span>`);
    lines.push(`  <span class="prop">justify-content</span><span class="punc">:</span> <span class="val">${state["justify-content"]}</span><span class="punc">;</span>`);
    lines.push(`  <span class="prop">align-items</span><span class="punc">:</span> <span class="val">${state["align-items"]}</span><span class="punc">;</span>`);
    lines.push(`  <span class="prop">align-content</span><span class="punc">:</span> <span class="val">${state["align-content"]}</span><span class="punc">;</span>`);
  }
  lines.push(`  <span class="prop">gap</span><span class="punc">:</span> <span class="val">${state.gap}px</span><span class="punc">;</span>`);
  lines.push(`<span class="punc">}</span>`);
  codeOutput.innerHTML = lines.join("\n");
}

function refresh() {
  applyStyles();
  renderCode();
}

// button group clicks
document.querySelectorAll(".opt[data-group]").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.disabled) return;
    const group = btn.dataset.group;
    const value = btn.dataset.value;
    state[group] = value;

    document.querySelectorAll(`.opt[data-group="${group}"]`).forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    refresh();
  });
});

gapSlider.addEventListener("input", () => {
  state.gap = Number(gapSlider.value);
  gapValue.textContent = state.gap + "px";
  refresh();
});

countSlider.addEventListener("input", () => {
  state.count = Number(countSlider.value);
  countValue.textContent = state.count;
  buildChildren();
  refresh();
});

document.getElementById("copyBtn").addEventListener("click", () => {
  const text = codeOutput.textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById("copyBtn");
    const old = btn.textContent;
    btn.textContent = "copied!";
    setTimeout(() => (btn.textContent = old), 1200);
  });
});

buildChildren();
refresh();
