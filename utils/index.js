export const truncateText = (htmlContent, maxLength = 140) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlContent;
  const plainText = tempDiv.textContent || tempDiv.innerText || "";

  if (plainText.length > maxLength) {
    return plainText.substring(0, maxLength - 3).trim() + "...";
  }

  return plainText;
};
