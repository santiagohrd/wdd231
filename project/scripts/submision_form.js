const params = new URLSearchParams(window.location.search);
    const entries = Array.from(params.entries());

    let html = '<h2>Submitted Data:</h2><ul>';
    entries.forEach(([key, value]) => {
      html += `<li><strong>${key}:</strong> ${decodeURIComponent(value)}</li>`;
    });
    html += '</ul>';

    document.getElementById('confirmation').innerHTML = html;