
[Software](#software)  
[Computer](#computer)  
[Operating System](#os)  
[Bureaucracies](#bureaucracies)  
[Information-Technology-Basics](#information-technology-basics)

# Software
- Desktop, web-based, and mobile.
- major change.minor change.path or minor bug fix.build number, date or less significant change.
- Flowchart start (terminal, circle), process (rectangle), decision (diamond), data (IO, parallelogram).
- Use pseudocode, identifiers, queries, constraints, records.

## Scripting
- Programs that take interpret & execute command-line command and returns output is a "shell" or "command line interpreter".
- Gather info, choose the script, write, test, schedule, include logging/error reporting.
### Bourne Again Shell (Bash)
- Scripting language commonly used on Linux & Unix operating systems.
- Used for  shell scripting, command line management, and system administration.
- Automation & system config.
### PowerShell
- Microsoft command-line shell and scripting language developed for Windows systems.
- Automation & system config.
### Batch
- Automates tasks and processes on Windows systems.
- Used with Powershell or VBscript to do complex or added functionality.
- Automation of command-line tasks.
- Executed by Windows command prompt or PowerShell.

``` shell
systeminfo # Processor, memory, uptime.
ipconfig # Current network adapters config (ip addresses, subnet masks, default gateway).
taskslist # Current processes and their memory and CPU usage.
netstat # Current network connections, info about local & remote addresses and their state.
```

### Python
- Extensive libraries.
- Bash, PowerShell, & Batch are better suited for command-line tasks, sysAdmin, & automation.
## Browser
- Plug-ins provide specific added functionality.
- Extensions customize menus, buttons, toolsbars, cookies, block pop-ups.

## SDLC
- Traditional whole product developed and shipped, research and planning done at start.
- Agile is short quick bursts and research & planning occur during dev.
### Requirements analysis and planning
- Purpose, resources, users, i/o, QA, legal & regulatory, risk, schedule.
- Software requirements specification document (SRS)
### Design
- Creates design document from the SRS.
### Coding
- Longest step
### Testing
- Unit, regression, integration, and stress tests.
### Deployment
### Maintenance

## Models
### Waterfall
- Linear sequential model, output of one phase is input for the next.
### Iterative
- Iterative incremental model.
### Spiral
- Uses waterfall and prototype models, good for large products.
- Planning, risk analyssi, engineering, and evaluation.
- Done iteratively
### V-shaped
Verification & validation model, coding and testing are concurrent.
### Agile
- Join dev process over several short cycles (2 to 4 weeks)
- Testing happens in each sprint.
- Iterative form of dev, MVP is used.
- Individuals & interactions over processes and tools.
- Working software over comprehensive docs.
- Customer collab over contract negotiations.
- Responding to change over following plan.
### Lean
- Focus on delivery speed.
- Continuous improvement.
- Reducing waste.
- Build in quality.
- Create knowledge.
- Deliver fast, respect people, optimize the whole.
- DevOps methodology comes from agile and lean. 
## Browser
- Has a UI, browser engine, rendering engine with networking, javascript interpreter, UI backend, data persistence.
- A plug-in is for a specific website, extension is more general tooling.
## Business
- Database, project, business-specific, accounting.
## Collaboration
- Email client, conferencing, instant messaging, online workspace, document sharing.
## Utility
- Anti-malware, firewall, preventative maintenance.
## Productivity
- Word processing, spreadsheet, presentation, web browser, visual diagramming.

## Single platform
- Written for a particular OS or OS version, specific programming language, operates only in that OS.
- Are faster, smaller and more focused, easier to use. 
- Higher cost of development, updates and maintenance cost more. Longer dev time.
## Cross-platform
- Generalized programming expertise, wider user base, market reach, lower dev cost.
- Design challenges, performance and experience variability across platforms.
## Commercial (proprietary, closed source)
- Copyrighted, identified in the EULA.
- Product key or serial number certifies software's originality.
## Open source (free & open source FOSS)
- Different from freeware, which can be closed source.
- Can be freely copied modified, & distributed.
## Licenses
- Single-use allows one install.
- Group, corporate, campus, or site.
- Concurrent.
- Public domain allows anyone to use, modify, & distribute.
- Freeware allows anyone to use for free but source code is not available and cannot be modified or distributed without permission.
- Shareware allows users a trial period before purchasing a license.
- Open-source allows use, modification, and distribution as long as user follows EULA. Any modifications must be publicly available.
- Proprietary grants users right to use without source code or modification or distribution.
- Copy left is siilar to open source but it requires modified versions to be made available under same terms.

# Computer
- Processor's speed, bus types & speeds, quantity of cores, presence of cache or other onboard memory.
- Multiple processors or cores on one platform is Symmetric Multiprocessing (SMP).
- Hardware, OS software, App software, Peripherals, Users.
- Supercomputers, mainframes (business), minicomputers (servers ?), microcomputers (PC's, laptops, smartphones)
- General purpose computers, special purpose (IOT, gaming, security)
- Input, output, storage
- Popular server OS's are microsoft windows server, Linux, UNIX, macOS X, freeBSD
- 3 types of peripherals, input, output, and storage devices.
- SATA or PATA drives, RAM or ROM.
## Memory
### Hybrid disk array
- Performance concerns, complex to manage and maintain.
- Small, fast, lower setup cost.
- Combined multiple SSD & HDD into one array of drives.
- Best for when high speeds and capacity are ideal.
### Direct attached software (DAS)
- Can contain hard, solid-state, and optical disc drives.
- Best for small to medium networks with moderately high storage needs.
- External drives are portable DAS that connect via USB.
- Can configure to be ephemeral (deletes saved data on restart) or persistent.
## Troubleshooting
-  Disk failure symptoms include read/write failure, BSoD, bad sectors, disk thrashing, clicking & grinding noises.
- Self monitoring, analysis, and reporting technology (SMART), can send an alert when a disk is unreliable.
- If failure to boot, check lights, sounds, connections.
- Correct firmware boot sequence, no removable disks, motherboard port enabled.
- Use "setup disk" to boot into system recovery and type "C:", if invalid media type, try bootrec tool or reformat disk. If invalid drive specification, partition structure with diskpart tool.
- Errors like invalid drive specification or OSS not found indicate boot errors (caused by corruption, incorrect OS installation, or viruses). Try antivirus boot disk option.
- Try original startup disk, choose repair.
- Try connecting a hard drive to another computer to salvage files.
- Third party file recovery software may work better.
- Defrag, add ram,  upgrade to SS or hybrid.

``` bash
$ chkdisk \r # Locates bad sectors, f attempts to fix.
$ bootrec /fixmbr # 
$ bootec /fixboot # Fix boot sector.
$ bootrec /rebuild bcd # Correct missing installations in boot configurations database.


```
### Optical drives
- Cleaning kits. 
- Buffer underrun occurs when memory is too slow to write to storage.
- Use latest writers, burn at lower speeds, write to hard drive instead, close apps during burn.

## Cables
### Hard drive 
- Connect a CPU to the main or default storage.
- Connect a hard drive to a motherboard or controller card.
### Serial advanced technology attachment (SATA)
- Next generation, carries high speed data, connects to storage devices.
### Integrated drive electronics (IDE)
- Older interface, 40-wire ribbon that connects motherboard to 1 or 2 drives.
### SCSI
- Designed to support a wide variety of devices.
- Ribbon or standard round cables of 50, 68, or 80 wires.
- One cable or daisy chained can connect up to 16 devices including motherboard or SCSI controller card.
### Multipurpose
- Connect devices and peripherals without a network connection. They transfer both data and power.
- USB connects many peripherals, speeds from 480 Mbps - 40 Gbps.
- Lightning, Thunderbolt (copper max length 3 m, optical 60 m) (Apple proprietary)
### VGA
- Older, analog
### HDMI
- HD, different connector types (type A most common), to display.
### Mini-HDMI
- Type C cable.
### DisplayPort
- Connects a DisplayPort interface to a display.
### Digital visual interface (DVI)
- DVID (digital), DVII (integrated, meaning digital and analog)
- Single link supports 3.7 gbit/s HDTV @ 60 fps.
- Dual link supports 7.4 gbit/s HDTV @ 85 fps.
### Serial
- Follows RS-232 standard (data bits must flow in line, one after the other, over the cable)
- Used in modems, keyboards, mice, other peripherals (sometimes called peripheral cables, but video and multipurpose cables are also called that for the same reason).
### Adapters
- Some examples below
- DVI to VGA, HDMI
- USB-C to USB-A
- USB to ethernet
### Network
#### Coaxial
- Originally used to connect TV's to home antennas. Today used to send cable TV signal to cable boxes & internet to home modems.
- Contain an inner copper wire surrounded by insulation & other shielding.
- Highly resistant to signal interference.
- Can support longer lengths than twisted pair ethernet cables.
- 10 mbit/s
- Data over cable service interface specification (DOCSIS) is a networking standard used in systems that provide internet access over TV lines.
- Common types include RG6, RG59, & F.
#### Fiberoptic
- Used in WANs, work over long distances and can handle heavy volume traffic.
- Local connector (LC), straight tipped (ST), subscriber connector (SC).
##### Single mode
- Lone light path typically sourced by a laser.
- Much longer transmission distance.
##### Multimode
- Multiple light paths, sourced by LED. Can carry multiple signals in same line simultaneously.
#### Ethernet
- Twisted pair, T568A & B networking standards, 4 pairs of twisted wires to reduce interference.
- RJ11 & RJ45 are common.
- Hardwire a computer to a LAN, faster and more consistent than Wi-Fi.
- Shielded (STP) are more expensive and reduce outside interference.
- Unshielded(UTP) are cheaper and more common.
- Category numbers, with higher numbers being newer better faster.
### IDE
### SCSI
## Core
- Located in the center of the CPU.
- Can process data together or separately.
- Up to 64 but most between 2 and 8.
- Core clock speed is speed at which CPU runs internal processes and accesses its cache.
## Bus
- Located on a processor's perimeter.
- Data highway from processor to other board components.
- Addres bus two-way communication for memory address information from CPU/storage & i/o devices, one-way sending info to memory.
- Data bus two-way data transfer with processor (memory❔), CPU, and IO devices.
- Control bus two-way with memory, CPU, and io.
- Replaced by QuickPath Interconnect, PCI & PCIe, Hyper Transport et al.
## Cache
- Processor platform memory that buffers info & speeds tasks.
- Can help offset slower processors.
## RAM
- Helps install/edit view browser etc.
- Errors symptoms include screen or computer stops working, runs slowly, browser tabs errors and close, out of memory or other error messages, files become corrupt, BSOD.
## Drives
### Serial Advanced Technology Attachment (SATA)
- 250GB to &gt; 30 Tb
- Most desktop motherboards have @ east 4 SATA ports.
### Small Computer System Interface (SCSI)
- 10k to 15k RPM.
- Discontinued around 1994.
### Solid State (SSD)
- Reliable nonvolatile flash memory.
- 10 to 12 GB/s
- 120 GB to 2 Tb.
## Motherboard (mainboard)
- Main printed circuit board (PCB) in computers.
- Allows communication between components (i.e. CPU & memory) and power distribution ❔
- A memory slot holds a RAM stick in place on a computer's motherboard.
- Older components use peripheral component interconnect (PCI) expansion slots, newer use PCIe (express, can add additional features i.e. peripherals (sound), memory, grafix, network interfaces).
## Disk controller
- Enables CPU to communicate with disk drives
- Integrated drive electronics (IDE) is a standard created for comms between CPU & hard drive.
- IDE controller-circuit board.
- Small chips that dictate method of communications.
- Small circuit board on the mother board.
## Basic Input Output System (BIOS)
- Manages i/o mostly on startup.
- Preprogrammed into motherboard.
- Different than an OS, cant be installed/uninstalled upgraded.
- Relies on battery for power when power is off.
- Can update via flashing.
## Complementary Metal-Oxide Semiconductor (CMOS)
- Coin-sized battery, powers CMOS memory chip (stores computer hardware settings (BIOS))
- When this battery expires the system clock & hardware settings reset.
## Chip sets
- Set of electronic components in an integrated circuit (IC).
- Has a northbridge & a southbridge which are the core logic chip set on a motherboard & manage communications between the CPU & the motherboard.
## Northbridge
- Directly connected to CPU.
- Responsible for tasks requiring highest performance.
## Southbridge
- Implements slower performance tasks and not directly connected to CPU.
## Front-side bus
- Carries data between the CPU & memory controller hub (northbridge)
## Sockets
- Array of pins holding and connecting a processor to the motherboard.
- Older sockets use a pin grid array (PGA) pins on CPU.
- Newer boards use land grid array (LGA) with pins built into the motherboard.
## Power connector
- ATX-style power connector are larger than most and join the power supply to the motherboard.
## Central processing unit (CPU)
- Silicon chip in a special socket on the motherboard.
- Billions of microscopic transistors, comes in 32-bit or 64-bit (bits of data per clock-cycle).
## Random access memory (RAM)
- Temporarily stores working data & machine code.
- Cold-swappable(pluggable) means hardware is off.
- Measured in MHz (millions of cycles per second) speeds up to 2133 MHz.
## Dynamic Random-Access Memory (DRAM)
- Stores each bit of data in a memory cell, usually consisting of a capacitor and a transistor.
## Synchronous Dynamic-Access Memory (SDRAM)
- Form of DRAM semiconductor memory that can run faster than DRAM.
## Double Data Rate Synchronous Dynamic RAM (DDR-SDRAM)
- Faster than SDRAM because it fetches data twice per clock cycle.
- DDR3 & DDR4 SDRAM are faster.
## Small Outline Dual Input Memory Module (SO-DIMM)
- Take half the space of desktop slots, but draw more power.

## Video card
- Either an installed expansion card on a motherboard empty slot or a chip built into the motherboard.
- Allows computer to send graphical information to a video display device.
- Aliases are display adapter, graphics card, video adapter, board, or controller.

## Graphics Processing Unit (GPU)
- Specialized processor originaly designed to accelerate graphics rendering.
- Can process many data simultaneously.
- Not used only for grafix.

## Audio (sound) card
- IC that generates an audio signal and sends to speakers.
- Process sounds input and sends signals to speakers.
- Can accept analog sound and convert to digital data (audio file) (and vice versa),
- Usually built into motherboard except on custom rigs.

## Musical Instrument Digital Interface (MIDI)
- Works by sending MIDI data to a computer or synthesizer.

## Network Interface Card (NIC)
- Hardware component (circuit board) allowing network connectivity.
- Receives network signals and translates them into data.
- ISP to modem (digitizes signal) to router to NIC.
- Modem transforms digital information from NIC to analog signal to be transmitted to a network.

# OS
- Operating system.

## Windows
- Before installing, confirm base Windows OS is available on the computer's hard drive.
- Power computer.
- Custom advanced install.
- Generally use FAT32, NTFS, or HPFS configuration.
- All files are either binary or text.
- Virtual memory is a thing and might run low.
- Memory diagnostics, performance monitor, event viewer, registry editor, task manager.

### User
- Edit group policy, user config settings.


## Linux
- Open-source OS, uses EXT 4.
- Some vendors include versions with GUI's.
- Stability, security, efficiency.
- Versions are known as distributions (distros).
- Debian, Ubuntu, Redhat, LinuxMint, Opensuse.
- Canonical distributes Ubuntu, a lightweight version with GUI, reports 40 million users as of 2021.
- You can download a base OS & install the OS to the workstation using a thumbdrive, CD, or network drive.

### To Setup a Local Account.
- Login as admin.
- Create local system account sans administrative rights.
- Local accounts are typically shared with computer users and do not permit admin rights.
- Click 'Activities', search "user", select "settings", select "users", select "unlock", type administrator password, add user's local account information.
- In user's window, click "add user", in add user dialog box, select "standard" tab, type user's full name & user name.
- Select "allow user to set a password when they next login", click "add".
- Find power/ logout settings, click expander arrow and select "switch user", select the user, and the password, 
- Confirm user was created.

### Find system information.
- "Activities", search "about", click "settings

Symbol	Stands for:<br/>
~	Home directory<br/>
/	Root directory<br/>
.	Current directory<br/>
..	Parent directory<br/>

## macOS
- Pre-installed, uses HFS+.
- Simplified setup & migration.
- Built on UNIX.
- Linux capable (dual boot of virtual machine).
- Less likely to need onsite helpdesk support.
- Rigorous Apple application approval process (security & ease of use).
- Screen cap with cmd + shift + 3(full),4(part) or 5

### Initial setup
- Set language & location, optional accessibility settings, configure wi-fi access, accept data & privacy terms, optional migration assistant settings.
- Create or login to Apple account.
- Opt in for machine analytics, enable Siri, setup touch ID, create administrator user account, allow location services.
- UI features include dock, contextual menu (app-dependent), menu bar, desktop.
- Open system preferences, search "user", select "users & groups", create account.
- Uses a lock symbol to guard unintended user CRUD actions.


## Redundancies
### Data
- The first type, same piece exists in multiple places, may cause inconsistencies.
### Redundant array of independent disks (RAID)
- If Raid not detected, check drivers, verify status, if config tool unavailable controller may have failed.
#### 0 
- boosts performance by striping data across multiple disks, but any disk failure results in total loss.
- Not fault tolerant, fast, 100% usable disk capacity, if 1 drive fails all is lost.
- Popular with gamers and photographers who need to save large amounts of data quickly.
#### 1
 - Exact copy (mirror) of set of data on 2 or more disks.
 - 50% usable capacity, if 1 drive fails, no data is lost.
#### 5 
- Minimum of 3 HDD's and no maximum.
- "striping with parity", most common.
#### 10
- Combines RAID 0 & 1.
- If 3 drives fail, all data is lost.
### Network
- multiple adapter cards &/or ports for individual hosts.
- Load balancing to distribute traffic across multiple servers.
- Multiple network paths.
- Routers can detect issues & reroute data.
### Site
- Lose an entire site without losing signaling or application state data.
- Guards against total loss.
- Employs process of replication to synchronize data among multiple sites.
- Ensures data access.
### Power
- Two independent power sources.
- Uninterruptible power supply (UPS) adds another layer.
- UPS is less expensive than a generator.
### Backup
- Creates a copy from which restoration is possible in case of damage or unavailability of primary copy.
- Have specific and sequential strategy for backups.
- Identify key concerns.
- Select appropriate types.
- Full, incremental (altered files only), differential (only difference in data since last full backup), daily (just files modified same day backup is done)

# Bureaucracies
## DEFCON
- Annual Las Vegas meetup.
## FIPS (Federal Information Processing Standard)📑
## CompTIA Computational Technology Industry Association 
- IT Fundamentals (ITF+)
- A+ (Hardware, software, networking, OS's, device & network troubleshooting, device & network security, virtualization & cloud computing, operational procedures)
- Networks

### CompTIA troubleshooting model
- Identify the problem
- Research.
- Establish theory of probable cause.
- Test
- Establish plan of action.
- Implement solution or escalate.
- Verify full system functionality & implement preventative measures.
- Document findings, lessons learned, actions, outcomes.

## Cybersecurity and Infrastructure Security Ageny (CISA)

## IBM X-Force Exchange

## Microsoft
- 365 Certified: Fundamentals
- Role-based & specialty based certifications (💵 products).

## Apple
- Apple Certified Support Professional (ACSP), for macOS.

## Infraguard

## ITIL foundation (Information Technology Infrastructure Library)
- Can start at a support center courses.
- Standardized set of detailed practices and processes.
- Service strategy, design, transition, operation & improvement.

## CCNA Cisco Certified Network Associate

## COBIT
- Uses parts of ITIL

## Lean IT
- Framework for lean principles.

## Microsoft Office Framework

## ISO/IEC 20000

## ITSM metrics
- Customer satisfaction (CSAT)
- First-contact resolution.
- First-level resolution.
- Cost per ticket.
- Mean time per resolution.
- Consistency, efficiency, management, risk & downtime, operational costs, standardization & accountability.

## International Council of E-Commerce Consultants (EC-Council)
- Well-respected cybersecurity certification organization.
- Certified Encryption Specialist (CES) program.

## Oasis open

## Payment Card Industry Data Security Standard (PCI DSS)
- Covers cards from MasterCard, American Express, Visa, JCB International, and Discover Financial Services.

## Yeti


# Information-Technology-Basics

## Help Desk & Desktop Support Technician:
- Diagnosing & resolving.
- Installing new technologies & training users.
- Providing remote & on-site technical support.
- Backing up & restoring files.
- OS maintenance.

## Troubleshooting
1. Gather info
2. Duplicate problem
3. Triage problem
4. ID symptoms
5. Research knowledge base
6. Establish plan
7. Evaluate a theory and solutions
8. Implement solution.
9. Verify system functionality.

## Common issues
- Loose connections, power issues, damage, bootup problems, power on systems test (POST), blue or black screen, OS problems, software errors.

## Determine
- Ask questions.
- Reproduce the problem.
- Address individual problems separately.
- Collect info.

## Examine
- Consider simple explanations.
- Consider all possible causes.
- Try different methods.
- Test theory.
- Escalate if needed.

## Solve
- Create plan.
- Document the process beforehand.
- Carry out solution.
- Record each step.
- Confirm the system is operational.
- Update documentation.

## Technical Support Specialists & Engineers:
- Test & maintain equipment & software.
- Try out new systems & programs.
- Communicate about technology use & troubleshoot.
- Train users on hardware & applications.
- Document hardware & software changes & solutions.

## IT Support Analyst & Specialists:
- Provide IT support to staff & customers.
- Develop procedures for recurring problems.
- Evaluate & resolve complex problems.
- Troubleshoot hardware & software issues.
- Maintain database & ensure system security.

## Service desk technician & analyst.
- Answer IT support requests.
- Resolve IT issues & concerns.
- Communicate with clients on updates & solutions.
- Document and maintain service desk processes.
- Perform system installations & updates.

## Software
CMS, CRM, ERP, collaboration, productivity, & business-specific apps, web servers, OS's.

## Technical tools
VM's, VPN's, Network security, IT infrastructure monitoring software, enterprise hardware

## Soft skills
Customer service mindset, communication, organization, leadership, problem solving, flexible & adaptable.

## Other tools
Programming, OS's, application logs, servers, database management, passwords, support ticket workflow, knowledge bases.

## Performance evaluation
- Define expectation, record performance, evaluate performance, provide feedback.

## Setup requirements
- Office, home, other/multiple locations.
- Desk/chair, electrical connections, lighting, security, accessibility.
- Storage, RAM, connectivity, and backup.
- Reassess environment, follow unboxing instructions, cable management, electrical, ergonomics, workstation config.

## Types of support
- Self support, knowledge base, Google.
- Synchronous, phone, virtual chat, video chat, live chat, remote, in-person. 
- Asynchronous, e-mail, social media.

## Remote support
- Connectivity, printers, apps, malware, accounts.
- unattended, users and server maintenance, does not require permission, automated, updating, managing IT infrastructure, troubleshooting mass devices.
- Attended, needs both machines to be connected to remote software.
- Remote control, screen sharing, file sharing, secure devices, transfer support sessions, multiple monitors, 

### Remote Desktop Protocol (RDP):
- RDP-VPN uses secure protocol, includes encryption, & a private network.

### Virtual Private Network (VPN)

### Virtual Network Computer (VNC):
- Can RC another computer, requires password, not encrypted.

### Secure Shell (SSH):
- Common access method, uses encryption and digital certificates for user auth.
- Secure alternative to Telnet.

### Remote Monitoring & Management (RMM):
- Manage multiple systems, monitor health & performance, automate tasks, control, support, and analyze. 

### Microsoft Remote Assistance (MSRA),
- Uses encryption & auth, requires password.

### third party tools.
- Screen sharing, video conferencing, file transfers, and desktop management.

## Connecting remotely
- Gain confidence, ask to close confidential windows, launch connection app, educate, ask if they have more questions and inform them you are returning control.

### Tiered support
- Route technical issues, establish a timeline, handle large volume of issues, increase customer satisfaction, improve technical support training.
#### Level 0 Self service (FAQ's, knowledge base)
#### Level 1 Help desk
- Phone, e-mail, social media, passwords, hardware, software.
- Basic troubleshooting.
#### Level 2 Product-specific
- In-depth troubleshooting.
- Review level 1 documentation.
- Expensive troubleshooting & product-specific experience.
#### Level 3 Specialists & engineers & analysts
- Recreate the issue in a lab environment.
- Determine roote cause.
#### Level 4 Third party

## SLA Service-Level Agreement
- Support available, free or paid version, accepted contract.
- Customer-based, service-based, multiple (premium, VIP)
- Priority levels:
- 1 business stops, 2 disrupts business, 3 inconvenience, 4 routine service.
- Track, monitor, prioritize, automate, report

## Escalation
- Functional skills and knowledge.
- Hierarchical, escalation through up.
- Automatic, Chatbot after level 1 absent etc.
- Trust, communication, business improvement, satisfaction
## Steps
- Confirm contact info in ticketing system.
- Fully document the issue & reproducibility.
- Document system information.
- Get error logs/screenshots etc, then clear the system & repeat.
- Update the ticket.
- Inform customer, set reasonable guidelines, avoid promises.

## Ticketing systems
- The workflow is: create a ticket, start issue, resolve, close.
- Systematically records the interaction between a customer & service representative.
- Document, track, manage, resolve. 
- Helpdesk software, customer support software, ticketing app, case management or customer care.
- Automation, collaboration, integration, channels, reporting.
- Categorization, tagging, routing, ticket status.
- Create, triage, resolve, close.
- Productivity, interactions, metrics, improvement.
- Ticket #, customer name, issue description, notes, communication.