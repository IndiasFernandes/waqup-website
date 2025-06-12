async function handleSubmit(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        interest: document.getElementById('interest').value,
        timestamp: new Date().toISOString(),
        type: 'founding_member'
    };

    try {
        const response = await fetch('https://ronfvjamrvgiiivihkkg.supabase.co/rest/v1/waitlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': 'YOUR_ANON_KEY', // Replace with your Supabase anon key
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            document.getElementById('waitlistForm').reset();
            document.getElementById('successMessage').style.display = 'block';
        } else {
            throw new Error('Failed to submit');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to join waitlist. Please try again.');
    }
}

// Track user interactions
document.addEventListener('DOMContentLoaded', function() {
    // Track pricing card interactions
    document.querySelectorAll('.price-card').forEach(card => {
        card.addEventListener('click', function() {
            gtag('event', 'price_card_click', {
                'event_category': 'Engagement',
                'event_label': this.classList.contains('founder') ? 'Founding Member' : 'Regular Price',
                'value': this.classList.contains('founder') ? 99 : 6.99
            });
        });
    });

    // Track benefit card interactions
    document.querySelectorAll('.benefit-card').forEach((card, index) => {
        card.addEventListener('click', function() {
            gtag('event', 'benefit_card_click', {
                'event_category': 'Engagement',
                'event_label': this.querySelector('h3').textContent,
                'value': index + 1
            });
        });
    });

    // Track form field interactions
    const formFields = document.querySelectorAll('#waitlistForm input, #waitlistForm select');
    formFields.forEach(field => {
        field.addEventListener('focus', function() {
            gtag('event', 'form_field_focus', {
                'event_category': 'Form Interaction',
                'event_label': this.name || this.id
            });
        });
    });

    // Enhanced form submission tracking
    document.getElementById('waitlistForm').addEventListener('submit', function(event) {
        // Don't prevent default as Formspree needs to handle the submission
        const button = this.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        button.textContent = 'Submitting...';
        button.disabled = true;

        // Track form submission with enhanced data
        gtag('event', 'form_submission', {
            'event_category': 'Waitlist',
            'event_label': 'Founding Member Registration',
            'interest_area': document.getElementById('interest').value,
            'form_completion_time': Math.round((Date.now() - window.performance.timing.navigationStart) / 1000)
        });

        // Track conversion
        gtag('event', 'conversion', {
            'send_to': 'G-VLKGCJF6TK',
            'event_category': 'Waitlist',
            'event_label': 'Founding Member Registration Success'
        });

        // Reset button state after submission (whether successful or not)
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 2000);
    });

    // Track scroll depth
    let scrollDepthTracked = new Set();
    window.addEventListener('scroll', function() {
        const scrollPercent = Math.round((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100);
        const depths = [25, 50, 75, 100];
        
        depths.forEach(depth => {
            if (scrollPercent >= depth && !scrollDepthTracked.has(depth)) {
                scrollDepthTracked.add(depth);
                gtag('event', 'scroll_depth', {
                    'event_category': 'Engagement',
                    'event_label': `${depth}% scrolled`,
                    'value': depth
                });
            }
        });
    });
}); 