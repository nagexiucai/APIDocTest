import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="APIDocTest",
    version="0.0.1",
    author="bob-nx",
    author_email="me@nagexiucai.com",
    description="A lightweight Python WebAPI's documents and tests framework based on __doc__, VanillaJS-AJAX and Flask, but not limited to Flask.",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/nagexiucai/APIDocTest",
    packages=setuptools.find_packages(),
    classifiers=[
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
)
