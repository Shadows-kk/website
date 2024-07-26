export const useAllSvgs = () => {
  const images = import.meta.glob('@/assets/svg/*.svg');
  const paths = {};
  for (const path in images) {
    // 提取文件名并去除路径和扩展名，只保留文件名作为键
    const key = path.match(/\/([^/]+)\.svg$/)[1];
    paths[key] = images[path];
  }

  return paths;
};
