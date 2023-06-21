export const getLocalUrl = (path: string) => {
  if (path.startsWith("/")) path = path.substring(1);
  return new URL(`../assets/${path}`, import.meta.url).href;
};

export const waitForElementConnected = async (element: Node) => {
  if (!element.isConnected) {
    await new Promise((resolve) => setTimeout(resolve, 10));
    waitForElementConnected(element);
  }
};

export const hideSearchPanel = () => {
  console.log(124)
  const step = useState('step')
  step.value = 0
}
