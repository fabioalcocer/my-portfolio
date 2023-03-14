import { ReactNode } from 'react'
import {
  DjangoIcon,
  ExpressIcon,
  FigmaIcon,
  FirebaseIcon,
  GitIcon,
  MongoIcon,
  MySqlIcon,
  NextjsIcon,
  PythonIcon,
  QueryIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
  JavaIcon,
  ReduxIcon,
  VitestIcon,
  PrismaIcon
} from './SkillsIcons'

export const ICONS: Record<string, ReactNode> = {
  'Next.js': <NextjsIcon />,
  'React Query': <QueryIcon />,
  'Express.js': <ExpressIcon />,
  React: <ReactIcon />,
  Tailwind: <TailwindIcon />,
  TypeScript: <TypeScriptIcon />,
  MongoDB: <MongoIcon />,
  MySQL: <MySqlIcon />,
  Git: <GitIcon />,
  Figma: <FigmaIcon />,
  Django: <DjangoIcon />,
  Python: <PythonIcon />,
  Firebase: <FirebaseIcon />,
  Java: <JavaIcon />,
  Redux: <ReduxIcon />,
  Prisma: <PrismaIcon />,
  Vitest: <VitestIcon />
}
