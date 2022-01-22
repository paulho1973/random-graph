import React, { useRef, useEffect, useState } from "react";

import styles from './SectionScroll.module.css';

  const getDimensions = ele => {
	const { height } = ele.getBoundingClientRect();
	const offsetTop = ele.offsetTop;
	const offsetBottom = offsetTop + height;
  
	return {
	  height,
	  offsetTop,
	  offsetBottom,
	};
  };
  
  const scrollTo = ele => {
	ele.scrollIntoView({
	  behavior: "smooth",
	  block: "start",
	});
  };

const SectionScroll = () => {

	const [visibleSection, setVisibleSection] = useState();

	const headerRef = useRef(null);
	const section1Ref = useRef(null);
	const section2Ref = useRef(null);
	const section3Ref = useRef(null);
	const section4Ref = useRef(null);

	const sectionRefs = [
	  { section: "Section1", ref: section1Ref },
	  { section: "Section2", ref: section2Ref },
	  { section: "Section3", ref: section3Ref },
	  { section: "Section4", ref: section4Ref },
	];
  
	useEffect(() => {
	  const handleScroll = () => {
		//const { height: headerHeight } = getDimensions(headerRef.current);

		const { height: section1Height,
			    offsetBottom: section1Bottom, 
				offsetTop: section1Top } = getDimensions(section1Ref.current);

		const { height: section2Height,
				offsetBottom: section2Bottom, 
				offsetTop: section2Top } = getDimensions(section2Ref.current);

		const scrollPosition = window.scrollY;

		console.log(scrollPosition);

		console.log(section1Height);
		console.log(section1Bottom);
		console.log(section1Top);

		console.log(section2Height);
		console.log(section2Bottom);
		console.log(section2Top);
  
		const selected = sectionRefs.find(({ section, ref }) => {
		  const ele = ref.current;
		  if (ele) {
			const { offsetBottom, offsetTop } = getDimensions(ele);
			return scrollPosition > offsetTop && scrollPosition < offsetBottom;
		  }
		});

		if (selected && selected.section !== visibleSection) {
		  setVisibleSection(selected.section);
		} else if (!selected && visibleSection) {
		  setVisibleSection(undefined);
		}
	  };
  
	  handleScroll();
	  window.addEventListener("scroll", handleScroll);
	  return () => {
		window.removeEventListener("scroll", handleScroll);
	  };
	}, [visibleSection, section1Ref]);


	return (
		<div className={styles.row}>
			<div className={styles.column1} ref={headerRef}>
				<div className={styles.leftcard1} ref={section1Ref}>
					<h2>Section 1</h2>
					<p>Some text..</p>
				</div>
				<div className={styles.leftcard1} ref={section2Ref}>
					<h2>Section 2</h2>
					<p>Some text..</p>
				</div>
				<div className={styles.leftcard1} ref={section3Ref}>
					<h2>Section 3</h2>
					<p>Some text..</p>
				</div>
				<div className={styles.leftcard1} ref={section4Ref}>
					<h2>Section 4</h2>
					<p>Some text..</p>
				</div>
				<div className={styles.leftcard1}>
					<h2>Section 5</h2>
					<p>Some text..</p>
				</div>
			</div>
			<div className={styles.column2}>
				<div className={styles.rightcard1}>
					<div className={styles.header} >
						<button
							type="button"
							className={`${styles.headerlink} ${visibleSection === "Section1" ? styles.selected : ""}`}
							onClick={() => {
								scrollTo(section1Ref.current);
							}}
						>
							Section 1
						</button>
						<button
							type="button"
							className={`${styles.headerlink} ${visibleSection === "Section2" ? styles.selected : ""}`}
							onClick={() => {
								scrollTo(section2Ref.current);
							}}
						>
							Section 2
						</button>
						<button
							type="button"
							className={`${styles.headerlink} ${visibleSection === "Section3" ? styles.selected : ""}`}
							onClick={() => {
								scrollTo(section3Ref.current);
							}}
						>
							Section 3
						</button>
						<button
							type="button"
							className={`${styles.headerlink} ${visibleSection === "Section4" ? styles.selected : ""}`}
							onClick={() => {
								scrollTo(section4Ref.current);
							}}
						>
							Section 4
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SectionScroll;