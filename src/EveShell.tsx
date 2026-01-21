import { AppShell, Burger, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavBar } from '@/components/NavBar';
import { Welcome } from '@/components/Welcome/Welcome';


export function EveShell() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <>
      <AppShell
        header={{ height: 70 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header>
          {/*<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />*/}

          <NavBar />
        </AppShell.Header>
        <AppShell.Navbar p="md">
          This is our nav for mobile and desktop shrink you window to see.
        </AppShell.Navbar>
        <AppShell.Main>
          <Welcome />
        </AppShell.Main>
      </AppShell>
    </>
  );
}
