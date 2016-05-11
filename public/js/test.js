//Register Helpers
Handlebars.registerHelper('json', function(posts) {

  var postsInJson = Handlebars.escapeExpression(JSON.stringify(posts, null, '\t'));

  return new Handlebars.SafeString(
    "<pre><code>" + postsInJson + "</code></pre>"
  );
});

Handlebars.registerHelper('table', function(context, options) {
  var descriptionTr = '';
  context.map(function(item, i){
    var rowClass = (i % 2 === 0) ? 'oddRow' : 'evenRow';
    return descriptionTr += '<tr class="' + rowClass + '"><td>' + options.fn({description: item.description}) + '</td></tr>';
  });
  return '<table>' + descriptionTr + '</table>';
});

// get templates
var allPostsTemplate = Handlebars.compile($('#posts-json-template').html()),
    tableTemplate    = Handlebars.compile($('#posts-table-template').html());

// making the context
var allPosts  = { posts: Data.getPosts() };

// Compiling template and context
var compiledPostTemplate  = allPostsTemplate(allPosts),
    compiledTableTemplate = tableTemplate(allPosts);

// Push compiled templates to view
$('.posts-json').html(compiledPostTemplate);
$('.posts-table').html(compiledTableTemplate);
