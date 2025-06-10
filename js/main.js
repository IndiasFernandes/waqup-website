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