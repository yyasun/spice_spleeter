document.getElementById('export-pdf').addEventListener('click', function() {
    drawMusicSheet();
    const PDFDocument = PDFKit;
    const doc = new PDFDocument();

    const stream = doc.pipe(blobStream());

    const svgElement = document.querySelector('svg');
    const svgData = new XMLSerializer().serializeToString(svgElement);

    doc.svg(svgData, 0, 0, { width: 500, height: 300 });

    doc.end();
    stream.on('finish', function() {
        const url = stream.toBlobURL('application/pdf');

        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'music-sheet.pdf';
        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    });
});
