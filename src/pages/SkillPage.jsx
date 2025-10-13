import Skills from "../components/Skills";
import useTheme from "../context/them";

function SkillPage() {
  const { reset } = useTheme();

  reset();
  return (
    <div className="bg-gradient py-12 min-h-screen bg-[#9c8bf8] bg-linear-to-r/srgb from-indigo-500 to-teal-400 dark:bg-radial-[at_25%_25%] dark:from-gray-500 dark:to-zinc-900">
      <Skills />
    </div>
  );
}

export default SkillPage;
