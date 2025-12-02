// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function truncateText(content: any[], maxLength: number = 150): string {
  if (!content || !content[0]?.children?.[0]?.text) {
    return "";
  }
  
  const text = content[0].children[0].text;
  
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}