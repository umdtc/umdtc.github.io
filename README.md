# UMD Tzu Ching Website

[umdtc.org](http://umdtc.org)

## Development
To start the application:
```
gulp dev
```
Local website can be seen at `http://localhost:3000/`

To add new or modify styles: modify the file `style.less` in the `/less` folder.

## Basic Github Usage

This is a repository. The repository is like a google drive folder; it contains all the folders, files, images, videos, etc that your project uses. This is the README file, which contains basic information about the project as well as basic instructions on how the project works. 

**Branching** is the main feature of Github that allows users to work on different versions of the project at the same time.
By default your repository has one branch named `master` which is considered to be the definitive branch. We use branches to experiment and make edits before committing them to `master`.

When you create a branch off the `master` branch, you’re making a copy of `master` as it was at that point in time. 

## Create a new branch
1. In the upper lefthand corner, find the drop-down menu at the top of the file list that says **branch-master**.
2. Type a branch name, e.g. `new branch`, into the branch text box.
3. Hit enter.

This should create a new branch that you can make edits in. Any changes to the `new branch` branch will not effect the `master` branch until you commit these changes.

## Make and Commit changes
1. Click on the file you want to edit.
2. Find the pencil icon in the upper righthand corner of the file view to edit.
3. Make edits to the file.
4. Write a commit message that describes your changes.
5. Click the **Commit Changes** button.

These changes will now be "committed" to the `new branch` branch, so now this branch contains content that's different from `master`. 

## Open a Pull Request
When you open a pull request, you’re proposing your changes and requesting that someone review and pull in your contribution and merge them into their branch. Pull requests show diffs, or differences, of the content from both branches. The changes, additions, and subtractions are shown in green and red.

1. Click the **Pull Request** tab, then from the Pull Request page, click the green New pull request button.
2. In the **Example Comparisons** box, select the branch you made `new branch`, to compare with the `master` branch.
3. Look over your changes in the diffs on the Compare page, make sure they’re what you want to submit.
4. When you’re satisfied that these are the changes you want to submit, click the big green **Create Pull Request** button.
5. Give your pull request a title and write a brief description of your changes.
