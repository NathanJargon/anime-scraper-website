$(document).ready(function () {
    // Assuming you have 5 pages for Recently Updated and 3 pages for Top Anime
    var recentlyUpdatedPages = 5;
    var topAnimePages = 3;

    // Generate page numbers with Bootstrap badges for Recently Updated
    var recentlyUpdatedPageNumbers = '';
    for (var i = 1; i <= recentlyUpdatedPages; i++) {
        recentlyUpdatedPageNumbers += '<span class="badge bg-primary page-badge">' + i + '</span>';
    }
    $('.recently-updated .page-numbers').html(recentlyUpdatedPageNumbers);

    // Generate page numbers with Bootstrap badges for Top Anime
    var topAnimePageNumbers = '';
    for (var j = 1; j <= topAnimePages; j++) {
        topAnimePageNumbers += '<span class="badge bg-primary page-badge">' + j + '</span>';
    }
    $('.top-anime .page-numbers').html(topAnimePageNumbers);
});