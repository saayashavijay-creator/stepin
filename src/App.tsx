import { type Dispatch, type SetStateAction, useEffect, useState } from "react";

type Role = "student" | "instructor";

type StudentPage =
  | "welcome"
  | "setup"
  | "home"
  | "explore"
  | "course"
  | "lesson"
  | "practice"
  | "progress"
  | "feedback"
  | "profile";

type IconName =
  | "home"
  | "compass"
  | "chart"
  | "user"
  | "play"
  | "arrow"
  | "back"
  | "clock"
  | "check"
  | "camera"
  | "message"
  | "users"
  | "video"
  | "book"
  | "search"
  | "bell"
  | "more"
  | "spark"
  | "pause"
  | "repeat"
  | "calendar"
  | "plus"
  | "lock";

const photos = {
  hero: "https://images.unsplash.com/photo-1597754298097-fb51c3ec8ac8?auto=format&fit=crop&w=1200&q=85",
  contemporary:
    "https://images.unsplash.com/photo-1758870966744-3680350bcfa4?auto=format&fit=crop&w=900&q=85",
  hiphop:
    "https://images.unsplash.com/photo-1548123378-bde4eca81d2d?auto=format&fit=crop&w=900&q=85",
  freestyle:
    "https://images.unsplash.com/photo-1502519144081-acca18599776?auto=format&fit=crop&w=900&q=85",
  instructor:
    "https://images.unsplash.com/photo-1586211070543-61ae1ad4a665?auto=format&fit=crop&w=600&q=85",
  lesson:
    "https://images.unsplash.com/photo-1609602961949-eddbb90383cc?auto=format&fit=crop&w=1200&q=85",
  student:
    "https://images.unsplash.com/photo-1660362407540-ac89b4c59a2d?auto=format&fit=crop&w=500&q=85",
};

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    home: (
      <>
        <path d="m3 10 9-7 9 7" />
        <path d="M5 9v11h14V9M9 20v-6h6v6" />
      </>
    ),
    compass: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
      </>
    ),
    chart: (
      <>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    play: <path d="m9 7 8 5-8 5V7Z" />,
    pause: (
      <>
        <path d="M9 7v10M15 7v10" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </>
    ),
    back: (
      <>
        <path d="M19 12H5M10 7l-5 5 5 5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    camera: (
      <>
        <rect x="3" y="6" width="18" height="14" rx="3" />
        <path d="m8 6 1-2h6l1 2" />
        <circle cx="12" cy="13" r="4" />
      </>
    ),
    message: (
      <path d="M20 15a3 3 0 0 1-3 3H9l-5 3v-3a3 3 0 0 1-2-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v9Z" />
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 19a6 6 0 0 1 12 0M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 5" />
      </>
    ),
    video: (
      <>
        <rect x="2" y="5" width="15" height="14" rx="3" />
        <path d="m17 10 5-3v10l-5-3" />
      </>
    ),
    book: (
      <>
        <path d="M4 5a3 3 0 0 1 3-3h5v18H7a3 3 0 0 0-3 2V5ZM20 5a3 3 0 0 0-3-3h-5v18h5a3 3 0 0 1 3 2V5Z" />
      </>
    ),
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="7" />
        <path d="m16 16 5 5" />
      </>
    ),
    bell: (
      <>
        <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z" />
        <path d="M10 21h4" />
      </>
    ),
    more: (
      <>
        <circle cx="5" cy="12" r="1" fill="currentColor" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        <circle cx="19" cy="12" r="1" fill="currentColor" />
      </>
    ),
    spark: (
      <>
        <path d="m12 2 1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2Z" />
        <path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" />
      </>
    ),
    repeat: (
      <>
        <path d="M17 2l3 3-3 3" />
        <path d="M3 11V9a4 4 0 0 1 4-4h13M7 22l-3-3 3-3" />
        <path d="M21 13v2a4 4 0 0 1-4 4H4" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M3 10h18" />
      </>
    ),
    plus: (
      <>
        <path d="M12 5v14M5 12h14" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className={`logo ${light ? "logo-light" : ""}`}>
      STEP<span>IN</span>
      <i>.</i>
    </div>
  );
}

const bottomNav: { id: StudentPage; label: string; icon: IconName }[] = [
  { id: "home", label: "Home", icon: "home" },
  { id: "explore", label: "Explore", icon: "compass" },
  { id: "progress", label: "Progress", icon: "chart" },
  { id: "profile", label: "Profile", icon: "user" },
];

function MobileTop({
  title,
  onBack,
  right,
}: {
  title?: string;
  onBack?: () => void;
  right?: React.ReactNode;
}) {
  return (
    <header className="mobile-top">
      {onBack ? (
        <button className="icon-btn" onClick={onBack} aria-label="Go back">
          <Icon name="back" />
        </button>
      ) : (
        <Logo />
      )}
      {title && <strong>{title}</strong>}
      <div className="top-right">
        {right || (
          <button className="icon-btn" aria-label="Notifications">
            <Icon name="bell" />
          </button>
        )}
      </div>
    </header>
  );
}

function BottomNav({ page, go }: { page: StudentPage; go: (p: StudentPage) => void }) {
  return (
    <nav className="bottom-nav">
      {bottomNav.map((item) => (
        <button
          key={item.id}
          className={page === item.id ? "active" : ""}
          onClick={() => go(item.id)}
        >
          <Icon name={item.icon} />
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

function Welcome({ chooseRole }: { chooseRole: (role: Role) => void }) {
  return (
    <div className="welcome-screen">
      <div className="welcome-image" style={{ backgroundImage: `url(${photos.hero})` }}>
        <div className="welcome-head">
          <Logo light />
          <span className="welcome-step">ONE APP · YOUR PATH</span>
        </div>
        <div className="welcome-tag">MOVE AT YOUR OWN PACE</div>
      </div>
      <div className="welcome-copy">
        <div className="eyebrow">WELCOME TO STEPIN</div>
        <h1>
          Move with
          <br />
          more <em>confidence.</em>
        </h1>
        <p>Choose how you’re joining today. Your space will be shaped around your role.</p>
        <div className="welcome-role-actions">
          <button className="primary-btn" onClick={() => chooseRole("student")}>
            <span>
              <small>STUDENT</small>I want to learn
            </span>
            <Icon name="arrow" />
          </button>
          <button className="role-secondary" onClick={() => chooseRole("instructor")}>
            <span>
              <small>INSTRUCTOR</small>I want to teach
            </span>
            <Icon name="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Setup({
  role,
  onBack,
  onComplete,
}: {
  role: Role;
  onBack: () => void;
  onComplete: () => void;
}) {
  const [level, setLevel] = useState("beginner");
  return (
    <div className="setup-screen">
      <MobileTop onBack={onBack} right={<span className="step-count">ROLE SETUP</span>} />
      <main>
        <div className="eyebrow">
          {role === "student" ? "NO PRESSURE, JUST PROGRESS" : "GUIDANCE THAT FEELS PERSONAL"}
        </div>
        <h1>
          {role === "student" ? (
            <>
              Where are you
              <br />
              starting from?
            </>
          ) : (
            <>
              How do you
              <br />
              like to teach?
            </>
          )}
        </h1>
        <p>
          {role === "student"
            ? "This helps us recommend the right pace. You can change it anytime."
            : "We’ll organize your workspace around the students and skills you support."}
        </p>
        {role === "student" ? (
          <div className="choice-stack">
            <button
              className={`level-card lime ${level === "beginner" ? "selected" : ""}`}
              onClick={() => setLevel("beginner")}
            >
              <span>BEGINNER</span>
              <strong>
                I'm finding
                <br />
                my rhythm.
              </strong>
              <small>Little or no dance experience</small>
              <i className="radio" />
            </button>
            <button
              className={`level-card lavender ${level === "intermediate" ? "selected" : ""}`}
              onClick={() => setLevel("intermediate")}
            >
              <span>INTERMEDIATE</span>
              <strong>
                I'm ready to
                <br />
                level up.
              </strong>
              <small>Comfortable with foundational moves</small>
              <i className="radio" />
            </button>
          </div>
        ) : (
          <div className="choice-stack">
            <button
              className={`level-card pink ${level === "beginner" ? "selected" : ""}`}
              onClick={() => setLevel("beginner")}
            >
              <span>FOUNDATION-FOCUSED</span>
              <strong>
                I build
                <br />
                confidence.
              </strong>
              <small>Primarily supporting newer dancers</small>
              <i className="radio" />
            </button>
            <button
              className={`level-card lavender ${level === "intermediate" ? "selected" : ""}`}
              onClick={() => setLevel("intermediate")}
            >
              <span>MIXED LEVELS</span>
              <strong>
                I guide
                <br />
                every stage.
              </strong>
              <small>Teaching beginner and intermediate paths</small>
              <i className="radio" />
            </button>
          </div>
        )}
      </main>
      <div className="setup-footer">
        <button className="primary-btn" onClick={onComplete}>
          {role === "student" ? "Start learning" : "Open my workspace"} <Icon name="arrow" />
        </button>
      </div>
    </div>
  );
}

function Home({ go }: { go: (p: StudentPage) => void }) {
  return (
    <div className="student-page">
      <MobileTop right={<div className="avatar small">AM</div>} />
      <main className="page-pad home-page">
        <div className="home-greeting">
          <div>
            <span>MONDAY, 14 OCT</span>
            <h1>Morning, Aisha.</h1>
            <p>One small step today keeps your rhythm going.</p>
          </div>
          <button className="icon-btn">
            <Icon name="bell" />
          </button>
        </div>
        <button className="continue-card" onClick={() => go("lesson")}>
          <img src={photos.hiphop} alt="Dancer practicing hip-hop" />
          <div className="continue-shade" />
          <div className="continue-top">
            <span className="pill lime-pill">CONTINUE LEARNING</span>
            <span>62%</span>
          </div>
          <div className="continue-bottom">
            <div>
              <small>HIP-HOP FOUNDATIONS · LESSON 04</small>
              <h2>
                Groove &<br />
                body control
              </h2>
              <div className="progress-line">
                <i />
              </div>
            </div>
            <span className="round-play">
              <Icon name="play" />
            </span>
          </div>
        </button>
        <section>
          <div className="section-head">
            <div>
              <span className="eyebrow">YOUR WEEK</span>
              <h2>Keep the momentum</h2>
            </div>
            <span className="soft-label">3 day rhythm</span>
          </div>
          <div className="week-card">
            <div className="week-ring">
              <span>
                <strong>3</strong>/4
              </span>
            </div>
            <div>
              <strong>Almost there.</strong>
              <p>15 more minutes to reach your weekly practice goal.</p>
            </div>
          </div>
          <div className="days">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <span key={i} className={i < 3 ? "done" : i === 3 ? "today" : ""}>
                {i < 3 ? <Icon name="check" size={13} /> : d}
              </span>
            ))}
          </div>
        </section>
        <section>
          <div className="section-head">
            <div>
              <span className="eyebrow">RECENT WIN</span>
              <h2>Your balance is improving</h2>
            </div>
          </div>
          <button className="win-card" onClick={() => go("feedback")}>
            <div className="spark-box">
              <Icon name="spark" />
            </div>
            <div>
              <strong>+12% steadier</strong>
              <p>Compared with your last practice</p>
            </div>
            <Icon name="arrow" />
          </button>
        </section>
      </main>
    </div>
  );
}

const courseCards = [
  { name: "Hip-Hop", count: "3 courses", image: photos.hiphop, color: "lime" },
  { name: "Contemporary", count: "4 courses", image: photos.contemporary, color: "pink" },
  { name: "Bollywood", count: "2 courses", image: photos.freestyle, color: "lavender" },
  { name: "Jazz", count: "3 courses", image: photos.hero, color: "pink" },
  { name: "Freestyle", count: "2 courses", image: photos.freestyle, color: "lime" },
];

function Explore({ go }: { go: (p: StudentPage) => void }) {
  const [filter, setFilter] = useState("All");
  return (
    <div className="student-page">
      <MobileTop />
      <main className="page-pad explore-page">
        <div className="eyebrow">FIND YOUR MOVEMENT</div>
        <h1>Explore dance.</h1>
        <div className="search-box">
          <Icon name="search" />
          <input aria-label="Search courses" placeholder="Search styles, moves, instructors" />
        </div>
        <div className="filter-row">
          {["All", "Beginner", "Intermediate"].map((x) => (
            <button key={x} className={filter === x ? "active" : ""} onClick={() => setFilter(x)}>
              {x}
            </button>
          ))}
        </div>
        <div className="course-grid">
          {courseCards.map((c, i) => (
            <button className={`course-tile ${c.color}`} key={c.name} onClick={() => go("course")}>
              <img src={c.image} alt={`${c.name} dance`} />
              <div className="course-overlay" />
              <span>0{i + 1}</span>
              <div>
                <small>{c.count}</small>
                <h2>{c.name}</h2>
              </div>
              <i>
                <Icon name="arrow" size={17} />
              </i>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

function Course({ go }: { go: (p: StudentPage) => void }) {
  const [level, setLevel] = useState("Beginner");
  return (
    <div className="student-page course-page">
      <div className="course-hero" style={{ backgroundImage: `url(${photos.hiphop})` }}>
        <MobileTop
          onBack={() => go("explore")}
          right={
            <button className="icon-btn glass">
              <Icon name="more" />
            </button>
          }
        />
        <div className="course-hero-copy">
          <span className="pill lime-pill">HIP-HOP</span>
          <h1>
            Find your
            <br />
            groove.
          </h1>
          <p>Build confidence, rhythm and control from the ground up.</p>
          <div>
            <span>
              <Icon name="book" size={16} /> 12 lessons
            </span>
            <span>
              <Icon name="clock" size={16} /> 3h 20m
            </span>
          </div>
        </div>
      </div>
      <main className="page-pad">
        <div className="instructor-row">
          <img src={photos.instructor} alt="Instructor Maya Chen" />
          <div>
            <small>YOUR INSTRUCTOR</small>
            <strong>Maya Chen</strong>
          </div>
          <button>View</button>
        </div>
        <div className="level-tabs">
          <button
            className={level === "Beginner" ? "active" : ""}
            onClick={() => setLevel("Beginner")}
          >
            Beginner <small>Start here</small>
          </button>
          <button
            className={level === "Intermediate" ? "active" : ""}
            onClick={() => setLevel("Intermediate")}
          >
            Intermediate <small>Build further</small>
          </button>
        </div>
        <div className="path-head">
          <div>
            <span className="eyebrow">{level.toUpperCase()} PATH</span>
            <h2>{level === "Beginner" ? "Move with confidence" : "Add texture & control"}</h2>
          </div>
          <span>1 / 12</span>
        </div>
        <div className="lesson-list">
          {[
            "Meet your natural bounce",
            "Groove foundations",
            "Weight shifts & steps",
            "Body control",
          ].map((x, i) => {
            const isLocked = i >= 2;
            const isComplete = i === 0;
            const isCurrent = i === 1;
            return (
              <button
                key={x}
                className={`${isComplete ? "complete" : isCurrent ? "current" : ""} ${isLocked ? "locked" : ""}`}
                onClick={() => go("lesson")}
                disabled={isLocked}
                aria-disabled={isLocked}
                style={isLocked ? { opacity: 0.4, cursor: "default" } : undefined}
              >
                <span>
                  {isComplete ? (
                    <Icon name="check" size={16} />
                  ) : isLocked ? (
                    <Icon name="lock" size={16} />
                  ) : (
                    `0${i + 1}`
                  )}
                </span>
                <div>
                  <strong>{x}</strong>
                  <small>
                    {isComplete
                      ? "Completed · 12 min"
                      : isCurrent
                        ? "Up next · 16 min"
                        : `Complete lesson 0${i} to unlock · ${14 + i} min`}
                  </small>
                </div>
                {isCurrent ? (
                  <i>
                    <Icon name="play" size={17} />
                  </i>
                ) : isLocked ? (
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      opacity: 0.5,
                      letterSpacing: "0.08em",
                    }}
                  >
                    LOCKED
                  </span>
                ) : (
                  <Icon name="arrow" size={17} />
                )}
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
}

function Lesson({ go }: { go: (p: StudentPage) => void }) {
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState("1×");
  const [repeat, setRepeat] = useState(true);
  return (
    <div className="student-page lesson-page">
      <div className="lesson-video" style={{ backgroundImage: `url(${photos.lesson})` }}>
        <MobileTop onBack={() => go("course")} right={<span className="video-time">04:18</span>} />
        <button className="main-play" onClick={() => setPlaying(!playing)}>
          <Icon name={playing ? "pause" : "play"} size={30} />
        </button>
        <div className="video-progress">
          <i style={{ width: playing ? "48%" : "32%" }} />
        </div>
      </div>
      <main className="page-pad">
        <span className="eyebrow">LESSON 04 · HIP-HOP FOUNDATIONS</span>
        <h1>
          Groove &<br />
          body control
        </h1>
        <p className="lesson-intro">
          Let the beat travel through your body. Today is about feeling, not perfection.
        </p>
        <div className="lesson-controls">
          <div>
            <small>PLAYBACK SPEED</small>
            <div>
              {["0.5×", "0.75×", "1×"].map((s) => (
                <button className={speed === s ? "active" : ""} key={s} onClick={() => setSpeed(s)}>
                  {s}
                </button>
              ))}
            </div>
          </div>
          <button
            className={repeat ? "repeat active" : "repeat"}
            onClick={() => setRepeat(!repeat)}
          >
            <Icon name="repeat" />
            <span>
              Repeat
              <br />
              <small>Section A</small>
            </span>
          </button>
        </div>
        <section className="breakdown">
          <div className="section-head">
            <div>
              <span className="eyebrow">BREAK IT DOWN</span>
              <h2>Movement steps</h2>
            </div>
            <span>3 steps</span>
          </div>
          {["Settle into the bounce", "Shift your weight", "Add the chest groove"].map((s, i) => (
            <button key={s}>
              <span>0{i + 1}</span>
              <div>
                <strong>{s}</strong>
                <small>
                  {
                    [
                      "Find your natural rhythm",
                      "Move left to right, slowly",
                      "Keep it relaxed and easy",
                    ][i]
                  }
                </small>
              </div>
              <Icon name="play" />
            </button>
          ))}
        </section>
        <button className="primary-btn" onClick={() => go("practice")}>
          Practice this movement <Icon name="camera" />
        </button>
      </main>
    </div>
  );
}

function Practice({ go }: { go: (p: StudentPage) => void }) {
  const [recording, setRecording] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  if (submitted)
    return (
      <div className="practice-success">
        <div className="success-mark">
          <Icon name="check" size={34} />
        </div>
        <div className="eyebrow">PRACTICE SENT</div>
        <h1>
          That took
          <br />
          courage.
        </h1>
        <p>
          Maya will review your movement and share a few personal pointers. For now, celebrate
          showing up.
        </p>
        <div className="self-note">
          <Icon name="spark" />
          <div>
            <small>YOUR PERSONAL WIN</small>
            <strong>You completed your first groove practice.</strong>
          </div>
        </div>
        <button className="primary-btn" onClick={() => go("home")}>
          Back to home <Icon name="arrow" />
        </button>
      </div>
    );
  return (
    <div
      className="practice-screen"
      style={{
        backgroundImage: `linear-gradient(180deg,rgba(0,0,0,.16),rgba(0,0,0,.72)),url(${photos.student})`,
      }}
    >
      <MobileTop onBack={() => go("lesson")} right={<span className="pill">PRACTICE MODE</span>} />
      <div className="practice-guide">
        <span>Keep your full body in frame</span>
        <div className="frame-corners" />
        <div className="countdown">{recording ? "REC  00:08" : "Ready?"}</div>
      </div>
      <div className="practice-bottom">
        <p>
          {recording
            ? "You’re doing great—keep moving."
            : "Take a breath. Start when you feel ready."}
        </p>
        <div className="record-row">
          <button className="ghost-round">
            <Icon name="repeat" />
          </button>
          <button
            className={`record-btn ${recording ? "recording" : ""}`}
            onClick={() => setRecording(!recording)}
          >
            <i />
          </button>
          <button className="ghost-round">
            <Icon name="camera" />
          </button>
        </div>
        {recording && (
          <button className="submit-recording" onClick={() => setSubmitted(true)}>
            Finish & send for feedback
          </button>
        )}
      </div>
    </div>
  );
}

function Progress() {
  return (
    <div className="student-page">
      <MobileTop />
      <main className="page-pad progress-page">
        <span className="eyebrow">YOUR JOURNEY</span>
        <h1>
          Look how far
          <br />
          you’ve moved.
        </h1>
        <p>Not compared to anyone else. Just you, one practice at a time.</p>
        <div className="progress-hero">
          <div className="big-ring">
            <div>
              <strong>68%</strong>
              <span>FOUNDATIONS</span>
            </div>
          </div>
          <div>
            <span className="eyebrow">CURRENT FOCUS</span>
            <h2>
              Hip-Hop
              <br />
              Foundations
            </h2>
            <small>8 of 12 lessons complete</small>
          </div>
        </div>
        <div className="stat-grid">
          <div className="lime">
            <span>SKILLS LEARNED</span>
            <strong>14</strong>
            <small>+3 this month</small>
          </div>
          <div className="pink">
            <span>PRACTICE TIME</span>
            <strong>
              6.5<sup>h</sup>
            </strong>
            <small>Across 18 sessions</small>
          </div>
          <div className="lavender">
            <span>LESSONS DONE</span>
            <strong>22</strong>
            <small>Keep building</small>
          </div>
        </div>
        <section>
          <div className="section-head">
            <div>
              <span className="eyebrow">CONSISTENCY</span>
              <h2>Your practice rhythm</h2>
            </div>
            <span className="soft-label">4 weeks</span>
          </div>
          <div className="rhythm-chart">
            {[35, 62, 46, 78, 58, 88, 72, 95, 52, 76, 64, 90, 81, 100].map((h, i) => (
              <i key={i} style={{ height: `${h}%` }} className={i > 9 ? "current" : ""} />
            ))}
          </div>
          <div className="chart-labels">
            <span>Sep 16</span>
            <span>Today</span>
          </div>
        </section>
        <section>
          <div className="section-head">
            <div>
              <span className="eyebrow">PERSONAL BESTS</span>
              <h2>Small wins, big shifts</h2>
            </div>
          </div>
          <div className="best-list">
            <div>
              <Icon name="spark" />
              <p>
                <strong>Balance held for 8 beats</strong>
                <span>2 beats longer than last week</span>
              </p>
            </div>
            <div>
              <Icon name="check" />
              <p>
                <strong>Clean weight transition</strong>
                <span>Your instructor noticed, too</span>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function Feedback({ go }: { go: (p: StudentPage) => void }) {
  return (
    <div className="student-page feedback-page">
      <MobileTop title="Instructor feedback" onBack={() => go("home")} />
      <main className="page-pad">
        <div className="feedback-meta">
          <span className="pill lime-pill">NEW FEEDBACK</span>
          <span>Received 2h ago</span>
        </div>
        <h1>
          Your groove is
          <br />
          starting to feel natural.
        </h1>
        <div className="feedback-video" style={{ backgroundImage: `url(${photos.student})` }}>
          <button>
            <Icon name="play" />
          </button>
          <span>Practice · 0:42</span>
        </div>
        <div className="coach-note">
          <div className="coach-head">
            <img src={photos.instructor} alt="Maya Chen" />
            <div>
              <strong>Maya Chen</strong>
              <span>Your instructor</span>
            </div>
            <Icon name="message" />
          </div>
          <p>
            “You’re settling into the beat much more confidently, Aisha. Your shoulders look relaxed
            and the weight shift is clearer. That’s real progress.”
          </p>
        </div>
        <section>
          <span className="eyebrow">TRY THIS NEXT</span>
          <div className="tip-card">
            <span>01</span>
            <div>
              <strong>Soften your knees</strong>
              <p>
                Stay a little lower through the bounce. It’ll make your transitions feel smoother.
              </p>
            </div>
          </div>
          <div className="tip-card">
            <span>02</span>
            <div>
              <strong>Let the arms follow</strong>
              <p>Keep them loose—they’ll naturally respond to your body’s groove.</p>
            </div>
          </div>
        </section>
        <button className="primary-btn" onClick={() => go("practice")}>
          Practice with Maya’s tips <Icon name="arrow" />
        </button>
      </main>
    </div>
  );
}

function Profile({ go, signOut }: { go: (p: StudentPage) => void; signOut: () => void }) {
  return (
    <div className="student-page">
      <MobileTop title="Profile" />
      <main className="page-pad profile-page">
        <div className="profile-head">
          <div className="avatar large">AM</div>
          <div>
            <h1>Aisha Malik</h1>
            <p>Learning since August 2024</p>
            <span className="pill lime-pill">BEGINNER PATH</span>
          </div>
        </div>
        <section>
          <div className="section-head">
            <div>
              <span className="eyebrow">MY INTENTION</span>
              <h2>Learning goal</h2>
            </div>
            <button>Edit</button>
          </div>
          <div className="goal-card">
            <Icon name="spark" />
            <p>“Feel confident enough to dance freely at my best friend’s wedding.”</p>
          </div>
        </section>
        <section>
          <div className="section-head">
            <div>
              <span className="eyebrow">IN PROGRESS</span>
              <h2>Enrolled courses</h2>
            </div>
          </div>
          <button className="enrolled-card" onClick={() => go("course")}>
            <img src={photos.hiphop} alt="Hip-hop dancer" />
            <div>
              <span>68% COMPLETE</span>
              <strong>Hip-Hop Foundations</strong>
              <small>with Maya Chen · 8/12 lessons</small>
              <div className="progress-line">
                <i style={{ width: "68%" }} />
              </div>
            </div>
            <Icon name="arrow" />
          </button>
          <button className="enrolled-card" onClick={() => go("course")}>
            <img src={photos.contemporary} alt="Contemporary dancer" />
            <div>
              <span>21% COMPLETE</span>
              <strong>Contemporary Flow</strong>
              <small>with Nia Roberts · 3/14 lessons</small>
              <div className="progress-line">
                <i style={{ width: "21%" }} />
              </div>
            </div>
            <Icon name="arrow" />
          </button>
        </section>
        <div className="profile-links">
          {["Weekly goal · 60 minutes", "Notification preferences", "Help & support"].map((x) => (
            <button key={x}>
              {x}
              <Icon name="arrow" />
            </button>
          ))}
          <button className="change-role" onClick={signOut}>
            Change role / Sign out
            <Icon name="arrow" />
          </button>
        </div>
      </main>
    </div>
  );
}

function StudentApp({
  page,
  setPage,
  signOut,
}: {
  page: StudentPage;
  setPage: (p: StudentPage) => void;
  signOut: () => void;
}) {
  const pages: Record<StudentPage, React.ReactNode> = {
    welcome: <Home go={setPage} />,
    setup: <Home go={setPage} />,
    home: <Home go={setPage} />,
    explore: <Explore go={setPage} />,
    course: <Course go={setPage} />,
    lesson: <Lesson go={setPage} />,
    practice: <Practice go={setPage} />,
    progress: <Progress />,
    feedback: <Feedback go={setPage} />,
    profile: <Profile go={setPage} signOut={signOut} />,
  };
  const navVisible = ["home", "explore", "progress", "profile"].includes(page);
  return (
    <div className="mobile-shell">
      {pages[page]}
      {navVisible && <BottomNav page={page} go={setPage} />}
    </div>
  );
}

type DashPage = "overview" | "students" | "student" | "submissions" | "assign";

const students = [
  {
    name: "Aisha Malik",
    initials: "AM",
    level: "Beginner",
    course: "Hip-Hop Foundations",
    progress: 68,
    active: "Today",
    color: "lime",
  },
  {
    name: "Leo Martins",
    initials: "LM",
    level: "Intermediate",
    course: "Contemporary Flow",
    progress: 82,
    active: "Today",
    color: "lavender",
  },
  {
    name: "Priya Shah",
    initials: "PS",
    level: "Beginner",
    course: "Bollywood Basics",
    progress: 44,
    active: "Yesterday",
    color: "pink",
  },
  {
    name: "Jordan Bell",
    initials: "JB",
    level: "Beginner",
    course: "Hip-Hop Foundations",
    progress: 31,
    active: "2d ago",
    color: "lime",
  },
];

// Per-student skill data for instructor views (prototype data, indexed to match students[])
const studentSkills: [string, number, string][][] = [
  [["Rhythm & timing", 78, "+14%"], ["Body control", 64, "+12%"], ["Balance", 71, "+8%"], ["Musicality", 52, "+9%"]],
  [["Rhythm & timing", 88, "+18%"], ["Body control", 82, "+15%"], ["Balance", 79, "+11%"], ["Musicality", 74, "+13%"]],
  [["Rhythm & timing", 52, "+8%"], ["Body control", 45, "+6%"], ["Balance", 48, "+7%"], ["Musicality", 36, "+5%"]],
  [["Rhythm & timing", 42, "+6%"], ["Body control", 32, "+4%"], ["Balance", 38, "+5%"], ["Musicality", 28, "+3%"]],
];

const studentGoals = [
  "“Feel confident enough to dance freely at my best friend’s wedding.”",
  "“Build enough technique to perform in a showcase by end of year.”",
  "“Connect with my cultural roots through dance and feel comfortable performing.”",
  "“Learn the basics well enough to teach kids at a summer camp.”",
];

type FeedbackDrafts = Record<number, { text: string; nextFocus: string }>;

function Sidebar({ page, go }: { page: DashPage; go: (p: DashPage) => void }) {
  const links: { id: DashPage; label: string; icon: IconName; count?: number }[] = [
    { id: "overview", label: "Overview", icon: "home" },
    { id: "students", label: "Students", icon: "users" },
    { id: "submissions", label: "Submissions", icon: "video", count: 8 },
    { id: "assign", label: "Assignments", icon: "book" },
  ];
  return (
    <aside className="sidebar">
      <Logo light />
      <div className="side-label">WORKSPACE</div>
      <nav>
        {links.map((x) => (
          <button
            key={x.id}
            className={page === x.id || (page === "student" && x.id === "students") ? "active" : ""}
            onClick={() => go(x.id)}
          >
            <Icon name={x.icon} />
            <span>{x.label}</span>
            {x.count && <i>{x.count}</i>}
          </button>
        ))}
      </nav>
      <div className="side-bottom">
        <button>
          <Icon name="message" />
          Messages<i>3</i>
        </button>
        <div className="instructor-mini">
          <img src={photos.instructor} alt="Maya Chen" />
          <div>
            <strong>Maya Chen</strong>
            <small>Instructor</small>
          </div>
          <Icon name="more" />
        </div>
      </div>
    </aside>
  );
}

function DashHeader({ title, sub }: { title: string; sub: string }) {
  return (
    <header className="dash-header">
      <div>
        <span>{sub}</span>
        <h1>{title}</h1>
      </div>
      <div>
        <button className="search-btn">
          <Icon name="search" /> Search
        </button>
        <button className="icon-btn">
          <Icon name="bell" />
        </button>
        <button className="primary-btn">
          <Icon name="plus" /> Assign lesson
        </button>
      </div>
    </header>
  );
}

function Overview({ go }: { go: (p: DashPage) => void }) {
  return (
    <>
      <DashHeader title="Good morning, Maya." sub="MONDAY, 14 OCTOBER" />
      <div className="dash-content">
        <section className="metric-grid">
          <div>
            <span className="metric-icon lime">
              <Icon name="users" />
            </span>
            <small>TOTAL STUDENTS</small>
            <strong>48</strong>
            <p>
              <b>+6</b> this month
            </p>
          </div>
          <div>
            <span className="metric-icon lavender">
              <Icon name="spark" />
            </span>
            <small>ACTIVE THIS WEEK</small>
            <strong>36</strong>
            <p>75% of students</p>
          </div>
          <div>
            <span className="metric-icon pink">
              <Icon name="video" />
            </span>
            <small>AWAITING FEEDBACK</small>
            <strong>08</strong>
            <p>
              <b>3 new</b> today
            </p>
          </div>
        </section>
        <div className="dash-columns">
          <section className="panel submissions-panel">
            <div className="panel-head">
              <div>
                <span>LATEST ACTIVITY</span>
                <h2>Practice submissions</h2>
              </div>
              <button onClick={() => go("submissions")}>
                View all <Icon name="arrow" />
              </button>
            </div>
            {students.slice(0, 3).map((s, i) => (
              <button className="submission-row" key={s.name} onClick={() => go("submissions")}>
                <div
                  className="video-thumb"
                  style={{
                    backgroundImage: `url(${[photos.student, photos.freestyle, photos.contemporary][i]})`,
                  }}
                >
                  <span>
                    <Icon name="play" size={14} />
                  </span>
                </div>
                <div>
                  <strong>{s.name}</strong>
                  <small>
                    {["Groove & Body Control", "Floorwork Transitions", "Bollywood Expression"][i]}
                  </small>
                </div>
                <span className={`level-badge ${s.level.toLowerCase()}`}>{s.level}</span>
                <div className="submitted-time">
                  <strong>{["12 min ago", "1h ago", "Yesterday"][i]}</strong>
                  <small>{["0:42", "1:08", "0:56"][i]} video</small>
                </div>
                <Icon name="arrow" />
              </button>
            ))}
          </section>
          <aside className="panel rhythm-panel">
            <div className="panel-head">
              <div>
                <span>WEEKLY CHECK-IN</span>
                <h2>Class rhythm</h2>
              </div>
              <button>
                <Icon name="more" />
              </button>
            </div>
            <div className="donut">
              <div>
                <strong>75%</strong>
                <span>ACTIVE</span>
              </div>
            </div>
            <div className="legend">
              <p>
                <i className="lime-dot" />
                <span>On rhythm</span>
                <b>36</b>
              </p>
              <p>
                <i className="pink-dot" />
                <span>Needs a nudge</span>
                <b>8</b>
              </p>
              <p>
                <i className="gray-dot" />
                <span>Paused</span>
                <b>4</b>
              </p>
            </div>
            <button className="outline-btn">Message inactive students</button>
          </aside>
        </div>
        <section className="panel growth-panel">
          <div className="panel-head">
            <div>
              <span>STUDENT PROGRESS</span>
              <h2>Skill growth this month</h2>
            </div>
            <div className="month-select">
              October <span>⌄</span>
            </div>
          </div>
          <div className="growth-body">
            <div className="growth-chart">
              <div className="y-labels">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0</span>
              </div>
              <div className="chart-area">
                <svg viewBox="0 0 700 180" preserveAspectRatio="none">
                  <path
                    d="M0 145 C80 140 100 122 160 126 S250 100 320 110 S410 64 475 76 S570 42 700 30"
                    fill="none"
                    stroke="#8d8bef"
                    strokeWidth="4"
                  />
                  <path
                    d="M0 155 C100 152 120 142 185 145 S270 125 350 128 S460 95 520 106 S600 80 700 82"
                    fill="none"
                    stroke="#c6f36a"
                    strokeWidth="4"
                  />
                </svg>
                <div className="x-labels">
                  <span>Week 1</span>
                  <span>Week 2</span>
                  <span>Week 3</span>
                  <span>Week 4</span>
                </div>
              </div>
            </div>
            <div className="growth-summary">
              <div>
                <span className="lavender-dot" />
                <p>
                  <small>Intermediate path</small>
                  <strong>+18%</strong>
                </p>
              </div>
              <div>
                <span className="lime-dot" />
                <p>
                  <small>Beginner path</small>
                  <strong>+12%</strong>
                </p>
              </div>
              <p>Growth reflects each student’s progress against their own previous performance.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function Students({ go }: { go: (p: DashPage) => void }) {
  const [filter, setFilter] = useState("All students");
  return (
    <>
      <DashHeader title="Students" sub="YOUR COMMUNITY" />
      <div className="dash-content">
        <div className="directory-tools">
          <div className="search-box">
            <Icon name="search" />
            <input placeholder="Search students" />
          </div>
          <div>
            {["All students", "Beginner", "Intermediate"].map((x) => (
              <button key={x} className={filter === x ? "active" : ""} onClick={() => setFilter(x)}>
                {x}
              </button>
            ))}
          </div>
        </div>
        <section className="panel student-table">
          <div className="table-head">
            <span>STUDENT</span>
            <span>LEARNING PATH</span>
            <span>PROGRESS</span>
            <span>LAST ACTIVE</span>
            <span />
          </div>
          {students
            .filter((s) => filter === "All students" || s.level === filter)
            .map((s) => (
              <button className="student-row" key={s.name} onClick={() => go("student")}>
                <div>
                  <i className={`avatar ${s.color}`}>{s.initials}</i>
                  <p>
                    <strong>{s.name}</strong>
                    <small>{s.level}</small>
                  </p>
                </div>
                <span>{s.course}</span>
                <div className="table-progress">
                  <span>
                    <i style={{ width: `${s.progress}%` }} />
                  </span>
                  <b>{s.progress}%</b>
                </div>
                <span>{s.active}</span>
                <Icon name="arrow" />
              </button>
            ))}
        </section>
      </div>
    </>
  );
}

function StudentDetail({ go }: { go: (p: DashPage) => void }) {
  return (
    <>
      <header className="dash-header detail-header">
        <button className="back-link" onClick={() => go("students")}>
          <Icon name="back" /> Students
        </button>
        <div>
          <button className="outline-btn">
            <Icon name="message" /> Message
          </button>
          <button className="primary-btn" onClick={() => go("assign")}>
            <Icon name="plus" /> Assign task
          </button>
        </div>
      </header>
      <div className="dash-content student-detail">
        <div className="student-identity">
          <div className="avatar xlarge lime">AM</div>
          <div>
            <span className="level-badge beginner">BEGINNER PATH</span>
            <h1>Aisha Malik</h1>
            <p>Joined 12 August 2024 · Hip-Hop Foundations</p>
          </div>
          <div className="identity-stat">
            <small>CURRENT RHYTHM</small>
            <strong>3 days</strong>
            <span>Personal best: 5</span>
          </div>
        </div>
        <div className="detail-grid">
          <div>
            <section className="panel">
              <div className="panel-head">
                <div>
                  <span>SKILL-WISE PROGRESS</span>
                  <h2>Foundations</h2>
                </div>
                <span>Updated today</span>
              </div>
              <div className="skill-list">
                {[
                  ["Rhythm & timing", 78, "+14%"],
                  ["Body control", 64, "+12%"],
                  ["Balance", 71, "+8%"],
                  ["Musicality", 52, "+9%"],
                ].map(([n, p, g]) => (
                  <div key={String(n)}>
                    <div>
                      <strong>{n}</strong>
                      <span>{g} from first session</span>
                      <b>{p}%</b>
                    </div>
                    <span>
                      <i style={{ width: `${p}%` }} />
                    </span>
                  </div>
                ))}
              </div>
            </section>
            <section className="panel note-panel">
              <div className="panel-head">
                <div>
                  <span>PRIVATE NOTES</span>
                  <h2>Your observations</h2>
                </div>
                <button>Edit</button>
              </div>
              <p>
                Aisha responds well to feeling-based cues rather than technical language. Confidence
                is growing; keep reinforcing shoulder relaxation.
              </p>
            </section>
          </div>
          <aside>
            <section className="panel student-goal">
              <span>LEARNING GOAL</span>
              <Icon name="spark" />
              <p>“Feel confident enough to dance freely at my best friend’s wedding.”</p>
            </section>
            <section className="panel">
              <div className="panel-head">
                <div>
                  <span>LATEST SUBMISSION</span>
                  <h2>Groove practice</h2>
                </div>
              </div>
              <div className="latest-video" style={{ backgroundImage: `url(${photos.student})` }}>
                <button>
                  <Icon name="play" />
                </button>
                <span>0:42</span>
              </div>
              <div className="feedback-status">
                <Icon name="check" />
                <span>Feedback sent today</span>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </>
  );
}

function Submissions({ go }: { go: (p: DashPage) => void }) {
  const [selected, setSelected] = useState(0);
  const [sent, setSent] = useState(false);
  return (
    <>
      <DashHeader title="Practice submissions" sub="8 AWAITING FEEDBACK" />
      <div className="submission-workspace">
        <div className="submission-queue">
          {students.map((s, i) => (
            <button
              className={selected === i ? "active" : ""}
              key={s.name}
              onClick={() => {
                setSelected(i);
                setSent(false);
              }}
            >
              <div
                className="video-thumb"
                style={{
                  backgroundImage: `url(${[photos.student, photos.freestyle, photos.contemporary, photos.hiphop][i]})`,
                }}
              />
              <div>
                <strong>{s.name}</strong>
                <span>
                  {
                    [
                      "Groove & Body Control",
                      "Floorwork Transitions",
                      "Expression Practice",
                      "Bounce Foundations",
                    ][i]
                  }
                </span>
                <small>{["12 min ago", "1h ago", "Yesterday", "Yesterday"][i]}</small>
              </div>
              {i < 2 && <i />}
            </button>
          ))}
        </div>
        <div className="review-area">
          <div className="review-video" style={{ backgroundImage: `url(${photos.student})` }}>
            <button>
              <Icon name="play" size={28} />
            </button>
            <div>
              <span>00:12</span>
              <i>
                <b />
              </i>
              <span>00:42</span>
            </div>
          </div>
          <div className="review-title">
            <div>
              <span className="level-badge beginner">BEGINNER</span>
              <h2>{students[selected].name}</h2>
              <p>Groove & Body Control · Practice 02</p>
            </div>
            <button className="outline-btn" onClick={() => go("student")}>
              View profile
            </button>
          </div>
        </div>
        <aside className="feedback-editor">
          <span>PERSONAL FEEDBACK</span>
          <h2>Guide, don’t grade.</h2>
          <p>Comment on Aisha’s progress from her previous practice.</p>
          <textarea defaultValue="Your bounce feels much more natural this time, Aisha. You’re staying relaxed through the shoulders—great progress!" />
          <div className="quick-cues">
            <span>ADD A QUICK CUE</span>
            <button>Soften the knees</button>
            <button>Relax the shoulders</button>
            <button>Watch the timing</button>
          </div>
          <label>
            NEXT FOCUS
            <input defaultValue="Keep the arms loose and let them follow the groove." />
          </label>
          <button className="primary-btn" onClick={() => setSent(true)}>
            {sent ? (
              <>
                <Icon name="check" /> Feedback sent
              </>
            ) : (
              <>
                Send feedback <Icon name="arrow" />
              </>
            )}
          </button>
        </aside>
      </div>
    </>
  );
}

function Assign() {
  const [assigned, setAssigned] = useState(false);
  const [task, setTask] = useState("lesson");
  return (
    <>
      <DashHeader title="Create an assignment" sub="SUPPORT THE NEXT STEP" />
      <div className="dash-content assign-layout">
        <section className="panel assign-form">
          <span className="eyebrow">01 · CHOOSE STUDENTS</span>
          <div className="student-select">
            <div className="avatar lime">AM</div>
            <div>
              <strong>Aisha Malik</strong>
              <small>Beginner · Hip-Hop Foundations</small>
            </div>
            <button>Change</button>
          </div>
          <span className="eyebrow">02 · ASSIGNMENT TYPE</span>
          <div className="assignment-types">
            <button className={task === "lesson" ? "active" : ""} onClick={() => setTask("lesson")}>
              <Icon name="book" />
              <strong>Lesson</strong>
              <span>Continue structured learning</span>
            </button>
            <button
              className={task === "practice" ? "active" : ""}
              onClick={() => setTask("practice")}
            >
              <Icon name="video" />
              <strong>Practice task</strong>
              <span>Focus on a specific skill</span>
            </button>
          </div>
          <span className="eyebrow">03 · SELECT CONTENT</span>
          <button className="content-choice">
            <div className="video-thumb" style={{ backgroundImage: `url(${photos.hiphop})` }} />
            <div>
              <small>HIP-HOP FOUNDATIONS · LESSON 05</small>
              <strong>Weight shifts & transitions</strong>
              <span>14 min · Beginner</span>
            </div>
            <Icon name="arrow" />
          </button>
          <label className="note-input">
            PERSONAL NOTE
            <textarea defaultValue="Take this one slowly. Focus on keeping the weight shift smooth rather than making it big." />
          </label>
        </section>
        <aside className="panel assign-summary">
          <span>ASSIGNMENT SUMMARY</span>
          <div>
            <small>FOR</small>
            <strong>Aisha Malik</strong>
          </div>
          <div>
            <small>DUE</small>
            <button>
              <Icon name="calendar" /> Friday, 18 Oct
            </button>
          </div>
          <div className="encouragement">
            <Icon name="spark" />
            <p>This task builds directly on Aisha’s recent improvement in body control.</p>
          </div>
          <button className="primary-btn" onClick={() => setAssigned(true)}>
            {assigned ? (
              <>
                <Icon name="check" /> Assigned
              </>
            ) : (
              <>
                Assign to Aisha <Icon name="arrow" />
              </>
            )}
          </button>
        </aside>
      </div>
    </>
  );
}

type InstructorPage =
  | "overview"
  | "students"
  | "student"
  | "submissions"
  | "feedback"
  | "assign"
  | "profile";

const instructorNav: { id: InstructorPage; label: string; icon: IconName }[] = [
  { id: "overview", label: "Overview", icon: "home" },
  { id: "students", label: "Students", icon: "users" },
  { id: "submissions", label: "Submissions", icon: "video" },
  { id: "profile", label: "Profile", icon: "user" },
];

function InstructorBottomNav({
  page,
  go,
}: {
  page: InstructorPage;
  go: (page: InstructorPage) => void;
}) {
  return (
    <nav className="bottom-nav instructor-bottom-nav">
      {instructorNav.map((item) => (
        <button
          key={item.id}
          className={
            page === item.id ||
            (page === "student" && item.id === "students") ||
            (page === "feedback" && item.id === "submissions") ||
            (page === "assign" && item.id === "students")
              ? "active"
              : ""
          }
          onClick={() => go(item.id)}
        >
          <span className="nav-icon-wrap">
            <Icon name={item.icon} />
            {item.id === "submissions" && <i>8</i>}
          </span>
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

function InstructorOverview({
  go,
  goToFeedback,
}: {
  go: (page: InstructorPage) => void;
  goToFeedback: (idx: number) => void;
}) {
  return (
    <div className="instructor-page">
      <MobileTop right={<div className="avatar small pink">MC</div>} />
      <main className="page-pad instructor-content">
        <div className="instructor-greeting">
          <span>MONDAY, 14 OCT</span>
          <h1>Morning, Maya.</h1>
          <p>Your students are moving forward. Here’s where your guidance matters today.</p>
        </div>
        <section className="instructor-stat-grid">
          <div className="lime">
            <Icon name="users" />
            <span>TOTAL STUDENTS</span>
            <strong>48</strong>
            <small>+6 this month</small>
          </div>
          <div className="lavender">
            <Icon name="spark" />
            <span>ACTIVE THIS WEEK</span>
            <strong>36</strong>
            <small>75% of students</small>
          </div>
          <button className="pink" onClick={() => go("submissions")}>
            <Icon name="video" />
            <span>AWAITING FEEDBACK</span>
            <strong>08</strong>
            <small>3 new today</small>
            <i>
              <Icon name="arrow" size={17} />
            </i>
          </button>
        </section>
        <section className="instructor-section">
          <div className="section-head">
            <div>
              <span className="eyebrow">NEEDS YOUR EYE</span>
              <h2>Latest submissions</h2>
            </div>
            <button onClick={() => go("submissions")}>View all</button>
          </div>
          <div className="mobile-submission-list">
            {students.slice(0, 3).map((student, index) => (
              <button key={student.name} onClick={() => goToFeedback(index)}>
                <div
                  className="submission-image"
                  style={{
                    backgroundImage: `url(${[photos.student, photos.freestyle, photos.contemporary][index]})`,
                  }}
                >
                  <span>
                    <Icon name="play" size={13} />
                  </span>
                </div>
                <div>
                  <strong>{student.name}</strong>
                  <small>
                    {
                      ["Groove & body control", "Floorwork transitions", "Bollywood expression"][
                        index
                      ]
                    }
                  </small>
                  <span>{["12 min ago", "1h ago", "Yesterday"][index]}</span>
                </div>
                <Icon name="arrow" />
              </button>
            ))}
          </div>
        </section>
        <section className="class-rhythm-card">
          <div>
            <span className="eyebrow">CLASS RHYTHM</span>
            <h2>36 students practiced this week.</h2>
            <p>Progress is measured against each dancer’s own previous work.</p>
          </div>
          <div className="mini-donut">
            <strong>75%</strong>
          </div>
        </section>
      </main>
    </div>
  );
}

function InstructorStudents({
  goToStudent,
}: {
  goToStudent: (idx: number) => void;
}) {
  const [filter, setFilter] = useState("All");
  return (
    <div className="instructor-page">
      <MobileTop title="Students" />
      <main className="page-pad instructor-content">
        <div className="search-box">
          <Icon name="search" />
          <input aria-label="Search students" placeholder="Search students" />
        </div>
        <div className="filter-row">
          {["All", "Beginner", "Intermediate"].map((item) => (
            <button
              key={item}
              className={filter === item ? "active" : ""}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mobile-student-list">
          {students
            .map((student, originalIdx) => ({ student, originalIdx }))
            .filter(({ student }) => filter === "All" || student.level === filter)
            .map(({ student, originalIdx }) => (
              <button key={student.name} onClick={() => goToStudent(originalIdx)}>
                <i className={`avatar ${student.color}`}>{student.initials}</i>
                <div>
                  <strong>{student.name}</strong>
                  <small>
                    {student.level} · {student.course}
                  </small>
                  <span className="student-progress">
                    <i style={{ width: `${student.progress}%` }} />
                  </span>
                </div>
                <span>
                  <b>{student.progress}%</b>
                  <small>{student.active}</small>
                </span>
              </button>
            ))}
        </div>
      </main>
    </div>
  );
}

function InstructorStudentDetail({
  go,
  student,
}: {
  go: (page: InstructorPage) => void;
  student: (typeof students)[number];
}) {
  const idx = Math.max(0, students.indexOf(student));
  const skills = studentSkills[idx] ?? studentSkills[0];
  const goal = studentGoals[idx] ?? studentGoals[0];
  return (
    <div className="instructor-page">
      <MobileTop title="Student profile" onBack={() => go("students")} />
      <main className="page-pad instructor-content">
        <div className="mobile-student-identity">
          <div className={`avatar xlarge ${student.color}`}>{student.initials}</div>
          <div>
            <span className={`level-badge ${student.level.toLowerCase()}`}>
              {student.level.toUpperCase()} PATH
            </span>
            <h1>{student.name}</h1>
            <p>
              {student.course} · Last active {student.active}
            </p>
          </div>
        </div>
        <div className="personal-progress-note">
          <Icon name="spark" />
          <p>
            <strong>Growing into their groove</strong>
            {student.name.split(" ")[0]}'s progress is {student.progress}% through their current course.
          </p>
        </div>
        <section className="mobile-skill-card">
          <div className="section-head">
            <div>
              <span className="eyebrow">SKILL-WISE PROGRESS</span>
              <h2>Foundations</h2>
            </div>
          </div>
          {skills.map(([name, progress, growth]) => (
            <div className="mobile-skill-row" key={String(name)}>
              <div>
                <strong>{name}</strong>
                <span>{growth} from first session</span>
                <b>{progress}%</b>
              </div>
              <i>
                <span style={{ width: `${progress}%` }} />
              </i>
            </div>
          ))}
        </section>
        <section className="student-goal mobile-goal">
          <span>LEARNING GOAL</span>
          <p>{goal}</p>
        </section>
        <div className="student-action-row">
          <button className="outline-btn">
            <Icon name="message" /> Message
          </button>
          <button className="primary-btn" onClick={() => go("assign")}>
            Assign task <Icon name="plus" />
          </button>
        </div>
      </main>
    </div>
  );
}

function InstructorSubmissions({
  goToFeedback,
}: {
  goToFeedback: (idx: number) => void;
}) {
  return (
    <div className="instructor-page">
      <MobileTop title="Submissions" right={<span className="soft-label">8 waiting</span>} />
      <main className="page-pad instructor-content">
        <div className="submission-intro">
          <span className="eyebrow">PERSONAL GUIDANCE</span>
          <h1>
            See the effort.
            <br />
            Guide the next step.
          </h1>
        </div>
        <div className="mobile-submission-cards">
          {students.map((student, index) => (
            <button key={student.name} onClick={() => goToFeedback(index)}>
              <div
                className="card-video"
                style={{
                  backgroundImage: `url(${[photos.student, photos.freestyle, photos.contemporary, photos.hiphop][index]})`,
                }}
              >
                <span className="round-play">
                  <Icon name="play" size={16} />
                </span>
                <small>{["0:42", "1:08", "0:56", "0:38"][index]}</small>
              </div>
              <div className="card-submission-info">
                <span className={`level-badge ${student.level.toLowerCase()}`}>
                  {student.level}
                </span>
                <strong>{student.name}</strong>
                <p>
                  {
                    [
                      "Groove & body control",
                      "Floorwork transitions",
                      "Expression practice",
                      "Bounce foundations",
                    ][index]
                  }
                </p>
                <small>{["12 min ago", "1h ago", "Yesterday", "Yesterday"][index]}</small>
              </div>
              <Icon name="arrow" />
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

const defaultFeedbackTexts = [
  "Your bounce feels much more natural this time, Aisha. You’re staying relaxed through the shoulders—great progress!",
  "Leo, your transitions are really coming together. The flow between sections is noticeably smoother.",
  "Priya, your expression is growing with each practice. Keep bringing that energy into the movements.",
  "Jordan, solid start on the foundations. Your timing is getting more consistent—keep working the bounce.",
];

const defaultNextFocusTexts = [
  "Keep the arms loose and let them follow the groove.",
  "Try adding more texture to your arm movements during transitions.",
  "Focus on connecting the upper and lower body more in your next practice.",
  "Work on the weight shift — keep it even on both sides.",
];

function InstructorFeedback({
  go,
  submissionIdx,
  drafts,
  setDrafts,
}: {
  go: (page: InstructorPage) => void;
  submissionIdx: number;
  drafts: FeedbackDrafts;
  setDrafts: Dispatch<SetStateAction<FeedbackDrafts>>;
}) {
  const [sent, setSent] = useState(false);
  const [playing, setPlaying] = useState(false);
  const student = students[submissionIdx] ?? students[0];
  const submissionTitles = [
    "Groove & body control",
    "Floorwork transitions",
    "Expression practice",
    "Bounce foundations",
  ];

  useEffect(() => {
    setSent(false);
    setPlaying(false);
  }, [submissionIdx]);

  const draft = drafts[submissionIdx] ?? {
    text: defaultFeedbackTexts[submissionIdx] ?? "",
    nextFocus: defaultNextFocusTexts[submissionIdx] ?? "",
  };

  const updateDraft = (updates: Partial<{ text: string; nextFocus: string }>) => {
    setDrafts((prev) => ({
      ...prev,
      [submissionIdx]: { ...draft, ...updates },
    }));
  };

  const addCue = (cue: string) => {
    const sep = draft.text.trimEnd().length > 0 ? " " : "";
    updateDraft({ text: draft.text.trimEnd() + sep + cue });
  };

  return (
    <div className="instructor-page">
      <MobileTop title="Give feedback" onBack={() => go("submissions")} />
      <main className="page-pad instructor-content">
        <div className="mobile-review-video" style={{ backgroundImage: `url(${photos.student})` }}>
          <button onClick={() => setPlaying(!playing)}>
            <Icon name={playing ? "pause" : "play"} size={25} />
          </button>
          <span>0:12 / 0:42</span>
        </div>
        <div className="review-student">
          <div className={`avatar ${student.color}`}>{student.initials}</div>
          <div>
            <strong>{student.name}</strong>
            <small>{submissionTitles[submissionIdx] ?? submissionTitles[0]} · Practice 02</small>
          </div>
          <button onClick={() => go("student")}>Profile</button>
        </div>
        <section className="mobile-feedback-editor">
          <span className="eyebrow">PERSONAL FEEDBACK</span>
          <h1>Guide, don’t grade.</h1>
          <p>Comment on {student.name.split(" ")[0]}’s progress from their previous practice.</p>
          <textarea
            aria-label="Feedback"
            value={draft.text}
            onChange={(e) => updateDraft({ text: e.target.value })}
          />
          <div className="quick-cues">
            <span>ADD A QUICK CUE</span>
            <button onClick={() => addCue("Soften the knees.")}>Soften the knees</button>
            <button onClick={() => addCue("Relax the shoulders.")}>Relax the shoulders</button>
            <button onClick={() => addCue("Watch the timing.")}>Watch the timing</button>
          </div>
          <label>
            NEXT FOCUS
            <input
              value={draft.nextFocus}
              onChange={(e) => updateDraft({ nextFocus: e.target.value })}
            />
          </label>
          <button className="primary-btn" onClick={() => setSent(true)}>
            {sent ? (
              <>
                <Icon name="check" /> Feedback sent
              </>
            ) : (
              <>
                Send feedback <Icon name="arrow" />
              </>
            )}
          </button>
        </section>
      </main>
    </div>
  );
}

function InstructorAssign({
  go,
  student,
}: {
  go: (page: InstructorPage) => void;
  student: (typeof students)[number];
}) {
  const [assigned, setAssigned] = useState(false);
  const [task, setTask] = useState("lesson");
  const firstName = student.name.split(" ")[0];
  return (
    <div className="instructor-page">
      <MobileTop title="Assign a task" onBack={() => go("student")} />
      <main className="page-pad instructor-content">
        <div className="assignment-student">
          <div className={`avatar ${student.color}`}>{student.initials}</div>
          <div>
            <small>ASSIGNING TO</small>
            <strong>{student.name}</strong>
          </div>
        </div>
        <span className="eyebrow">ASSIGNMENT TYPE</span>
        <div className="assignment-types mobile-assignment-types">
          <button className={task === "lesson" ? "active" : ""} onClick={() => setTask("lesson")}>
            <Icon name="book" />
            <strong>Lesson</strong>
            <span>Structured learning</span>
          </button>
          <button
            className={task === "practice" ? "active" : ""}
            onClick={() => setTask("practice")}
          >
            <Icon name="video" />
            <strong>Practice</strong>
            <span>Focus on one skill</span>
          </button>
        </div>
        <span className="eyebrow">SELECTED CONTENT</span>
        <button className="content-choice mobile-content-choice">
          <div className="video-thumb" style={{ backgroundImage: `url(${photos.hiphop})` }} />
          <div>
            <small>{student.course.toUpperCase()} · LESSON 05</small>
            <strong>Weight shifts &amp; transitions</strong>
            <span>14 min · {student.level}</span>
          </div>
          <Icon name="arrow" />
        </button>
        <label className="note-input">
          PERSONAL NOTE
          <textarea
            defaultValue={`Take this one slowly, ${firstName}. Focus on keeping the weight shift smooth rather than making it big.`}
          />
        </label>
        <button className="primary-btn full-action" onClick={() => setAssigned(true)}>
          {assigned ? (
            <>
              <Icon name="check" /> Assigned to {firstName}
            </>
          ) : (
            <>
              Assign task <Icon name="arrow" />
            </>
          )}
        </button>
      </main>
    </div>
  );
}

function InstructorProfile({ signOut }: { signOut: () => void }) {
  return (
    <div className="instructor-page">
      <MobileTop title="Profile" />
      <main className="page-pad instructor-content">
        <div className="profile-head instructor-profile-head">
          <img src={photos.instructor} alt="Maya Chen" />
          <div>
            <h1>Maya Chen</h1>
            <p>Hip-Hop & Contemporary Instructor</p>
            <span className="pill lime-pill">48 STUDENTS</span>
          </div>
        </div>
        <section className="teaching-focus">
          <span className="eyebrow">TEACHING FOCUS</span>
          <h2>Confidence before complexity.</h2>
          <p>Helping dancers build strong foundations through patient, personal guidance.</p>
        </section>
        <div className="profile-links">
          {["Teaching preferences", "Notification settings", "Help & support"].map((item) => (
            <button key={item}>
              {item}
              <Icon name="arrow" />
            </button>
          ))}
          <button className="change-role" onClick={signOut}>
            Change role / Sign out
            <Icon name="arrow" />
          </button>
        </div>
      </main>
    </div>
  );
}

function InstructorDashboard({
  page,
  setPage,
  signOut,
}: {
  page: InstructorPage;
  setPage: (page: InstructorPage) => void;
  signOut: () => void;
}) {
  const [selectedStudentIdx, setSelectedStudentIdx] = useState(0);
  const [selectedSubmissionIdx, setSelectedSubmissionIdx] = useState(0);
  const [feedbackDrafts, setFeedbackDrafts] = useState<FeedbackDrafts>({});

  const goToStudent = (idx: number) => {
    setSelectedStudentIdx(idx);
    setPage("student");
  };

  const goToFeedback = (idx: number) => {
    setSelectedSubmissionIdx(idx);
    setSelectedStudentIdx(idx); // sync so Profile nav from feedback shows correct student
    setPage("feedback");
  };

  const pages: Record<InstructorPage, React.ReactNode> = {
    overview: <InstructorOverview go={setPage} goToFeedback={goToFeedback} />,
    students: <InstructorStudents goToStudent={goToStudent} />,
    student: (
      <InstructorStudentDetail
        go={setPage}
        student={students[selectedStudentIdx]}
      />
    ),
    submissions: <InstructorSubmissions goToFeedback={goToFeedback} />,
    feedback: (
      <InstructorFeedback
        go={setPage}
        submissionIdx={selectedSubmissionIdx}
        drafts={feedbackDrafts}
        setDrafts={setFeedbackDrafts}
      />
    ),
    assign: (
      <InstructorAssign
        go={setPage}
        student={students[selectedStudentIdx]}
      />
    ),
    profile: <InstructorProfile signOut={signOut} />,
  };
  return (
    <div className="mobile-shell instructor-shell">
      {pages[page]}
      <InstructorBottomNav page={page} go={setPage} />
    </div>
  );
}

const studentRoutes: StudentPage[] = [
  "home",
  "explore",
  "course",
  "lesson",
  "practice",
  "progress",
  "feedback",
  "profile",
];
const instructorRoutes: InstructorPage[] = [
  "overview",
  "students",
  "student",
  "submissions",
  "feedback",
  "assign",
  "profile",
];

export default function App() {
  const storedRole = sessionStorage.getItem("stepin-role") as Role | null;
  const initialRole = storedRole === "student" || storedRole === "instructor" ? storedRole : null;
  const [role, setRole] = useState<Role | null>(initialRole);
  const [pendingRole, setPendingRole] = useState<Role | null>(null);
  const [page, setPage] = useState<string>(() => {
    const historyPage = window.history.state?.page;
    if (initialRole === "student" && studentRoutes.includes(historyPage)) return historyPage;
    if (initialRole === "instructor" && instructorRoutes.includes(historyPage)) return historyPage;
    return initialRole === "instructor" ? "overview" : "home";
  });

  const defaultPage = (currentRole: Role) => (currentRole === "student" ? "home" : "overview");
  const isAllowed = (currentRole: Role, target: string) =>
    currentRole === "student"
      ? studentRoutes.includes(target as StudentPage)
      : instructorRoutes.includes(target as InstructorPage);

  const navigate = (target: string, replace = false) => {
    if (!role || !isAllowed(role, target)) return;
    const state = { role, page: target };
    window.history[replace ? "replaceState" : "pushState"](state, "", `#/${role}/${target}`);
    setPage(target);
  };

  useEffect(() => {
    if (role) {
      const safePage = isAllowed(role, page) ? page : defaultPage(role);
      if (!window.history.state?.role || window.history.state.role !== role) {
        window.history.replaceState({ role, page: safePage }, "", `#/${role}/${safePage}`);
      }
      if (safePage !== page) setPage(safePage);
    } else {
      window.history.replaceState({ auth: pendingRole ? "setup" : "welcome" }, "", "#/welcome");
    }
  }, [role]);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (!role) {
        const historyRole = event.state?.selectedRole;
        setPendingRole(
          event.state?.auth === "setup" &&
            (historyRole === "student" || historyRole === "instructor")
            ? historyRole
            : null,
        );
        return;
      }
      const target = event.state?.role === role ? event.state?.page : null;
      if (target && isAllowed(role, target)) {
        setPage(target);
      } else {
        const fallback = defaultPage(role);
        window.history.replaceState({ role, page: fallback }, "", `#/${role}/${fallback}`);
        setPage(fallback);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [role]);

  const chooseRole = (selectedRole: Role) => {
    setPendingRole(selectedRole);
    window.history.pushState({ auth: "setup", selectedRole }, "", `#/onboarding/${selectedRole}`);
  };

  const completeOnboarding = () => {
    if (!pendingRole) return;
    sessionStorage.setItem("stepin-role", pendingRole);
    const firstPage = defaultPage(pendingRole);
    setRole(pendingRole);
    setPage(firstPage);
    setPendingRole(null);
    window.history.replaceState(
      { role: pendingRole, page: firstPage },
      "",
      `#/${pendingRole}/${firstPage}`,
    );
  };

  const signOut = () => {
    sessionStorage.removeItem("stepin-role");
    setRole(null);
    setPendingRole(null);
    setPage("home");
    window.history.replaceState({ auth: "welcome" }, "", "#/welcome");
  };

  if (!role) {
    return (
      <div className="app auth">
        <div className="mobile-shell auth-shell">
          {pendingRole ? (
            <Setup
              role={pendingRole}
              onBack={() => {
                setPendingRole(null);
                window.history.replaceState({ auth: "welcome" }, "", "#/welcome");
              }}
              onComplete={completeOnboarding}
            />
          ) : (
            <Welcome chooseRole={chooseRole} />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`app ${role}`}>
      {role === "student" ? (
        <StudentApp
          page={page as StudentPage}
          setPage={(target) => navigate(target)}
          signOut={signOut}
        />
      ) : (
        <InstructorDashboard
          page={page as InstructorPage}
          setPage={(target) => navigate(target)}
          signOut={signOut}
        />
      )}
    </div>
  );
}
