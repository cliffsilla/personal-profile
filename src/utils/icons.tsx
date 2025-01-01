import { Code2, Layout, Server, Smartphone } from 'lucide-react';
import React from 'react';

export const createIcon = (Icon: typeof Layout) => {
  return <Icon className="w-6 h-6" />;
};

export const icons = {
  frontend: () => createIcon(Layout),
  backend: () => createIcon(Server),
  mobile: () => createIcon(Smartphone),
  other: () => createIcon(Code2),
};
