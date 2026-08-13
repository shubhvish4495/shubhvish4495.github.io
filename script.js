document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadResume');
    
    downloadBtn.addEventListener('click', function() {
        const resumeUrl = 'https://drive.google.com/file/d/1mvzUnig8s8ta748f01HaeEu1mZnNkWYV/view?usp=sharing';
        window.open(resumeUrl, '_blank');
    });

    // Experience card popup
    const cards = document.querySelectorAll('.card');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupPosition = document.getElementById('popup-position');
    const popupDate = document.getElementById('popup-date');
    const popupDetails = document.getElementById('popup-details');
    const closeBtn = document.querySelector('.close');

    const experiences = {
        1: {
            title: "Red Hat India Pvt Ltd., Pune",
            position: "Principal Software Engineer (Promoted from Senior Software Engineer)",
            date: "August 2021 - PRESENT",
            details: "<ul><li>Lead the design and implementation of cloud account verification services using Golang, Kafka, PostgreSQL, AWS, Docker, and Kubernetes.</li><li>Architected a fault-tolerant event processing pipeline using Kafka consumer groups with exactly-once processing semantics.</li><li>Manage and mentor a team of two engineers, driving project delivery across multiple initiatives.</li><li>Own the architecture and implementation of Auto Registration v2.</li><li>Design and maintain scalable REST APIs in Golang for enterprise subscription management with Helm-based deployments.</li></ul>"
        },
        2: {
            title: "Knorex, Pune",
            position: "Data Engineer - II (Promoted from Data Engineer)",
            date: "January 2020 - July 2021",
            details: "<ul><li>Developed an end-to-end Cookie Matching Service with API response times below 10 milliseconds.</li><li>Built scalable data ingestion pipelines using Apache Beam, Pub/Sub, and PostgreSQL.</li><li>Designed and implemented backend APIs and distributed data processing workflows for advertising technology platforms.</li><li>Collaborated with stakeholders to improve system reliability, performance, and scalability.</li></ul>"
        },
        3: {
            title: "NRI Fintech, Kolkata",
            position: "Associate Software Engineer",
            date: "August 2018 - January 2020",
            details: "<ul><li>Developed and maintained REST APIs for fintech applications using Spring Boot and Hibernate.</li><li>Worked directly with clients to gather requirements and deliver business-critical functionality.</li><li>Implemented SonarQube rules and code quality practices to improve maintainability.</li><li>Contributed to multiple financial services projects.</li></ul>"
        }
    };

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const experience = experiences[id];
            popupTitle.textContent = experience.title;
            popupPosition.textContent = experience.position;
            popupDate.textContent = experience.date;
            popupDetails.innerHTML = experience.details;
            popup.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });

    // Scroll animation for sections
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        var sections = document.querySelectorAll('section');
        sections.forEach(function(section) {
            if (isElementInViewport(section)) {
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);
});