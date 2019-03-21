import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="APIDocTest",
    version="0.0.2",
    author="bob-nx",
    author_email="me@nagexiucai.com",
    keywords=("pip", "apidoc", "test", "api", "document", "flask"),
    description="A lightweight Python WebAPI's documents and tests framework based on __doc__, VanillaJS-AJAX and Flask, but not limited to Flask.",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/nagexiucai/APIDocTest",
    packages=setuptools.find_packages(),
    package_data={
        "apidoctest": ["static/apidoctest.css", "static/apidoctest.js", "templates/apidoctest.html"],
    },
    data_files=[
        (".", ["APIDocTestV0.0.2.gif"]),
        ("./examples", ["examples/with-flask.py"]),
    ],
    python_requires=">=2.6, <3",
    classifiers=[
        "Programming Language :: Python :: 2 :: Only",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
)
