<script lang="ts">
    let hovered = false;
    import MSG_Logo from "$lib/images/MSG_Logo.png";
    import GBA_Logo from "$lib/images/GBA_3_main.png";
    import GBA2_Logo from "$lib/images/GBA_2_main_2.png";

    
    import { Button } from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Badge } from "$lib/components/ui/badge";
    import Analytics from "$lib/components/Analytics.svelte";
    
  </script>
  <Analytics />
  <div class="flex align-center justify-center mt-12">
    <img
      src={MSG_Logo}
      alt="Math Study Group Logo"
      class="h-1/6 w-1/6 rounded-md object-cover"
      class:hovered
      on:mouseenter={() => {
          hovered = true;
      }}
      on:mouseleave={() => {
          hovered = false;
      }}
    />
  </div>

  <h1 class="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl mt-4 text-center">
    Math Study Group
  </h1>

    <div class="flex-auto justify-center mt-6 mb-4">
        <p class="text-center text-gray-500 dark:text-gray-300">A team of developers working towards building great websites, exploits, and other projects.</p>
        <div class="flex justify-center mt-6 text-center">
            <Card.Root class="w-2/6">
                <Card.Header class="flex items-center justify-center">
                  <img src={GBA_Logo} alt="GBAv3 Logo" class="mx-auto w-24 rounded-md" />
                  <div>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                </Card.Header>
                <Card.Content>
                  <p>A fully featured retro emulator. Supports uploading your own library of any size, with 10+ retro consoles!</p>
                </Card.Content>
                <div class="flex justify-center">
                    <Card.Footer>
                    <Button class="mr-1" href="https://mathstudy.dev/gba">Visit</Button>
                    <Button class="ml-1" variant="secondary" href="https://github.com/Cattn/GBAv3">Source</Button>
                    </Card.Footer>
                </div>
              </Card.Root>
            </div>
            <div class="flex justify-center mt-6 text-center">
                <Card.Root class="w-2/6">
                    <Card.Header class="flex items-center justify-center">
                        <h1 class="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl text-center">Bunker</h1>
                        <div>
                          <Badge variant="destructive">WIP</Badge>
                        </div>
                    </Card.Header>
                    <Card.Content>
                      <p>A highly advanced exploit device. Includes many exploits out of the box, as well as other useful features to be used undetected. (WIP NEW VERSION SOON)</p>
                    </Card.Content>
                    <div class="flex justify-center">
                        <Card.Footer>
                        <Button class="mr-1" disabled>Visit</Button>
                        <Button class="ml-1" variant="secondary" disabled>Source</Button>
                        </Card.Footer>
                    </div>
                  </Card.Root>
                </div>

      
    <div class="flex justify-center mt-6 text-center">
      <Card.Root class="w-2/6">
          <Card.Header class="flex items-center justify-center">
              <h1 class="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl text-center">Wii-GBA</h1>
              <div>
              <Badge variant="secondary">Complete</Badge>
              <Badge variant="secondary">Archived</Badge>
              </div>
          </Card.Header>
          <Card.Content>
            <p>A library UI inspired by the Wii interface, supports adding your own library</p>
          </Card.Content>
          <div class="flex justify-center">
              <Card.Footer>
              <Button class="mr-1" disabled>Visit</Button>
              <Button class="ml-1" variant="secondary" href="https://github.com/Math-Study/wii-gba">Source</Button>
              </Card.Footer>
          </div>
        </Card.Root>
      </div>

      <div class="flex justify-center mt-6 text-center">
        <Card.Root class="w-2/6">
            <Card.Header class="flex items-center justify-center">
                <img src={GBA2_Logo} alt="GBA2.0 Logo" class="mx-auto w-24 rounded-md" />
                <div>
                <Badge variant="secondary">Complete</Badge>
                <Badge variant="secondary">Archived</Badge>
                </div>
            </Card.Header>
            <Card.Content>
              <p>The second version of the GBA site, greatly improved UI and search, with cool themes.</p>
            </Card.Content>
            <div class="flex justify-center">
                <Card.Footer>
                <Button class="mr-1" disabled>Visit</Button>
                <Button class="ml-1" variant="secondary" href="https://github.com/Math-Study/wii-gba">Source</Button>
                </Card.Footer>
            </div>
          </Card.Root>
        </div>

      <div class="flex justify-center mt-6 text-center">
        <Card.Root class="w-2/6">
            <Card.Header class="flex items-center justify-center">
                <h1 class="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl text-center">GBA</h1>
                <div>
                <Badge variant="secondary">Complete</Badge>
                <Badge variant="secondary">Archived</Badge>
                </div>
            </Card.Header>
            <Card.Content>
              <p>The original GBA site, started as a fork, but has evolved into much more.</p>
            </Card.Content>
            <div class="flex justify-center">
                <Card.Footer>
                <Button class="mr-1" disabled>Visit</Button>
                <Button class="ml-1" variant="secondary" href="https://github.com/Cattn/gba">Source</Button>
                </Card.Footer>
            </div>
          </Card.Root>
        </div>

        <div class="flex justify-center mt-6 text-center">
          <Card.Root class="w-2/6">
              <Card.Header>
                <h1 class="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl text-center">MSGweb</h1>
                <div>
                  <Badge variant="destructive">Unfinished</Badge>
                  <Badge variant="secondary">Archived</Badge>
                </div>
              </Card.Header>
              <Card.Content>
                <p>An interesting take on open source game sites! (Archived)</p>
              </Card.Content>
              <div class="flex justify-center">
                  <Card.Footer>
                  <Button class="mr-1" disabled>Visit</Button>
                  <Button class="ml-1" variant="secondary" href="https://github.com/Cattn/msgweb">Source</Button>
                  </Card.Footer>
              </div>
            </Card.Root>
          </div>
    </div>

    <h1 class="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl mt-4 text-center">
        Developers
    </h1>

    <div class="flex justify-center mt-6 mb-4 gap-2">
        <div class="w-2/6 mr-0 ml-auto">
            <Card.Root>
                <Card.Header class="flex items-center justify-center">
                    <h1 class="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl text-center">Cattn</h1>
                    <div>
                      <Badge variant="secondary">Owner</Badge>
                      <Badge variant="secondary">Primary Developer</Badge>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                </Card.Header>
                <Card.Content>
                  <p class="text-center">Hi, my name is Logan, AKA Cattn. I'm the lead developer @ Math Study, and the owner. Feel free to contact me with any inquires.</p>
                </Card.Content>
                <div class="flex justify-center">
                    <Card.Footer>
                    <Button class="mr-1" variant="link" href="https://github.com/Cattn">Github</Button>
                    <Button class="ml-1" variant="link" href="https://discordapp.com/users/523927057722376204">Discord</Button>
                    <Button class="ml-2" variant="link" href="mailto:Cattn@mathstudy.dev">Email</Button>
                    </Card.Footer>
                </div>
            </Card.Root>
        </div>
        <div class="w-2/6 mr-auto ml-0">
            <Card.Root>
                <Card.Header class="flex items-center justify-center">
                    <h1 class="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl text-center">Nailington</h1>
                    <div>
                      <Badge variant="secondary">Developer</Badge>
                      <Badge variant="secondary">Semi-Active</Badge>
                    </div>
                </Card.Header>
                <Card.Content>
                  <p class="text-center">I am a member of MSG who helps out and does small projects. Generally open to requests and will consider PRs and suggestions. Contact info is below.</p>
                </Card.Content>
                <div class="flex justify-center">
                    <Card.Footer>
                    <Button class="mr-1" variant="link" href="https://github.com/Nailington">Github</Button>
                    <Button class="ml-1" variant="link" href="https://discordapp.com/users/827577809181474838">Discord</Button>
                    <Button class="ml-2" variant="link" href="mailto:nailington@mathstudy.dev">Email</Button>
                    </Card.Footer>
                </div>
            </Card.Root>
        </div>
    </div>


  <style>
    .hovered {
      filter: brightness(1.2);
      transition: 0.5s ease;
    }
  </style>
