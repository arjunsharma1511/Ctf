function generateFlag(answer, level) {
  return (
    "CTF{" +
    btoa(answer)
      .replace(/=/g, "")
      .substring(0, 6) +
    "_L" +
    level +
    "}"
  );
}
