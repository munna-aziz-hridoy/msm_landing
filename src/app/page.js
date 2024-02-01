import {
  Header,
  ImageSection,
  OverviewSection,
  StepSection,
  VideoSection,
} from "@/components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <OverviewSection />
        <StepSection />
        <VideoSection />
        <ImageSection />
      </div>
    </main>
  );
}
