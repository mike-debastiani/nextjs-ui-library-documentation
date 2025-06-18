import Pre from "@/components/ui/pre"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardGrid } from "@/components/markdown/card"
import { FileTree } from "@/components/markdown/filetree"
import { File, Folder } from "@/components/markdown/filetree/component"
import RoutedLink from "@/components/markdown/link"
import Mermaid from "@/components/markdown/mermaid"
import Note from "@/components/markdown/note"
import { Step, StepItem } from "@/components/markdown/step"
import { TextInput } from "@/components/ui-library/TextInput"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui-library/Checkbox"
import { RadioButton } from "@/components/ui-library/RadioButton"
import { SelectDropdown } from "@/components/ui-library/SelectDropdown"
import { SwitchToggle } from "@/components/ui-library/SwitchToggle"
import { TextArea } from "@/components/ui-library/TextArea"
import { Alert } from "@/components/ui-library/Alert"
import { Badge } from "@/components/ui-library/Badge"
import { Tooltip } from "@/components/ui-library/Tooltip"

export const components = {
  a: RoutedLink,
  Card,
  CardGrid,
  FileTree,
  Folder,
  File,
  Mermaid,
  Note,
  pre: Pre,
  Step,
  StepItem,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TextInput,
  Button,
  Checkbox,
  RadioButton,
  SelectDropdown,
  SwitchToggle,
  TextArea,
  Alert,
  Badge,
  Tooltip,
}
